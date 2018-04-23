import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { TimetableService, Day } from "../timetable.service";

@Component({
  selector: "app-timetable",
  templateUrl: "./timetable.component.html",
  styleUrls: ["./timetable.component.scss"]
})
export class TimetableComponent implements OnInit {

  private currentFragment: string;

  mobileNav = [
    { name: "mon", description: "Mon" },
    { name: "tues", description: "Tues" },
    { name: "wed", description: "Wed" },
    { name: "thurs", description: "Thurs" },
    { name: "fri", description: "Fri" }
  ];

  constructor(
    private timetableService: TimetableService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.fragment
      .subscribe(fragment => this.currentFragment = fragment);
  }
  
  isMobileActive(day: Day) {
    if (!this.currentFragment) {
      return day === "mon";
    }

    return this.currentFragment === day;
  }

  get currentMobile() {
    return this.timetableService.timetable[this.currentFragment];
  }

}
