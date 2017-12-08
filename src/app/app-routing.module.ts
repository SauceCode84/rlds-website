import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { TimetableComponent } from "./timetable/timetable.component";
import { FeesComponent } from "./fees/fees.component";

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "timetable",
    component: TimetableComponent
  },
  {
    path: "fees",
    component: FeesComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { enableTracing: false }   // debug only
  )],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }