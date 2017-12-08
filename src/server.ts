import * as express from "express";

import { enableProdMode } from "@angular/core";
import { renderModuleFactory } from "@angular/platform-server";

import { readFileSync } from "fs";
import { join } from "path";

import "zone.js/dist/zone-node";

enableProdMode();

const PORT = process.env.PORT || 4300;
const DIST_FOLDER = join(process.cwd(), "dist");

const app = express();

const template = readFileSync(join(DIST_FOLDER, "browser", "index.html")).toString();
const { AppServerModuleNgFactory } = require("main.server");

app.engine("html", (_, options, callback) => {
  const opts = { document: template, url: options.req.url };

  renderModuleFactory(AppServerModuleNgFactory, opts)
    .then(html => callback(null, html));
});

app.set("view engine", "html");
app.set("views", "src");

app.get("*.*", express.static(join(DIST_FOLDER, "browser")));

app.get("*", (req, res) => {
  res.render("index", { req });
});

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}!`);
});
