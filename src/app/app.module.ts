import { NgModule } from "@angular/core";
import { BrowserModule, BrowserTransferStateModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { TimetableComponent } from "./timetable/timetable.component";
import { FeesComponent } from "./fees/fees.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { FooterComponent } from "./footer/footer.component";

import { WINDOW_PROVIDERS } from "./window.service";
import { TimetableService } from "./timetable.service";
import { SeoService } from "./seo.service";

@NgModule({
  declarations: [
    AppComponent,

    HomeComponent,
    TimetableComponent,
    FeesComponent,
    NavBarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "rlds-website-ng" }),
    AppRoutingModule,
    BrowserTransferStateModule
  ],
  providers: [
    TimetableService,
    SeoService,

    WINDOW_PROVIDERS
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
