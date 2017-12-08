import { Component } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";

interface NavBarItem {
  name: string;
  link: string;
}

@Component({
  selector: "rlds-nav-bar",
  templateUrl: "./nav-bar.component.html",
  styleUrls: ["./nav-bar.component.scss"]
})
export class NavBarComponent {

  items: NavBarItem[] = [
    {
      name: "Home",
      link: "/"
    },
    {
      name: "Fees",
      link: "fees"
    },
    {
      name: "Timetable",
      link: "timetable"
    }
  ];

  constructor(private route: Router) {
    this.route.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log("current url", event.url);
      }
    });
  }

}
