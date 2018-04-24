import "zone.js/dist/zone-node";
import "reflect-metadata";

import { renderModuleFactory } from "@angular/platform-server";
import { enableProdMode } from "@angular/core";

import * as express from "express";
import { join } from "path";
import { readFileSync } from "fs";

(global as any).WebSocket = require("ws");
(global as any).XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

enableProdMode();

const PORT = process.env.PORT || 4300;
const DIST_FOLDER = join(process.cwd(), "dist");

const app = express();

const template = readFileSync(join(DIST_FOLDER, "browser", "index.html")).toString();
const { AppServerModuleNgFactory } = require("./dist/server/main.bundle");

app.engine("html", (_, options, callback) => {
  const opts = { document: template, url: options.req.url };

  renderModuleFactory(AppServerModuleNgFactory, opts)
    .then(html => callback(null, html));
});

app.set("view engine", "html");
app.set("views", join(DIST_FOLDER, "browser"));

// server static files from /browser
app.get("*.*", express.static(join(DIST_FOLDER, "browser")));

// all regular routes use the Universal engine
app.get("*", (req, res) => {
  res.render(join(DIST_FOLDER, "browser", "index.html"), { req });
});

// start up the node server
app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}!`);
});
