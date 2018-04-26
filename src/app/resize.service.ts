import { Injectable } from "@angular/core";

import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/fromEvent";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/map";
import "rxjs/add/operator/pluck";

interface WindowSizeChange {
  height: number;
  width: number;
  size: WindowSize;
}

type WindowSize = "na" | "xs" | "sm" | "md" | "lg" | "xl";

@Injectable()
export class ResizeService {

  private windowSize$: BehaviorSubject<WindowSizeChange>;

  constructor() {
    this.windowSize$ = new BehaviorSubject(this.getWindowSize());
    
    Observable.fromEvent(window, "resize")
      .map(this.getWindowSize)
      .subscribe(this.windowSize$);
  }

  get width$() {
    return this.windowSize$
      .pluck<WindowSizeChange, number>("width")
      .distinctUntilChanged();
  }

  get height$() {
    return this.windowSize$
      .pluck<WindowSizeChange, number>("height")
      .distinctUntilChanged();
  }

  get size$() {
    return this.windowSize$
      .pluck<WindowSizeChange, WindowSize>("size")
      .distinctUntilChanged();
  }

  get isMobile$() {
    return this.windowSize$
      .pluck<WindowSizeChange, number>("width")
      .map(width => width < 768)
      .distinctUntilChanged();
  }

  getWindowSize(): WindowSizeChange {
    let size: WindowSize = "na";
    let height = window.innerHeight;
    let width = window.innerWidth;

    if (width < 576) {
      size = "xs";
    } else if (width < 768) {
      size = "sm";
    } else if (width < 992) {
      size = "md";
    } else if (width < 1200) {
      size = "lg";
    } else {
      size = "xl";
    }

    return { height, width, size };
  }
}
