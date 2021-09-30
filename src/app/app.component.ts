import { Component } from '@angular/core';
import {NgcCookieConsentService} from 'ngx-cookieconsent';
import {ViewportScroller} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private ccService: NgcCookieConsentService,
              private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
  }

  scrollToTop(): void {
    this.viewportScroller.scrollToPosition([0,0]);
  }

  getYear(): string {
    return new Date().getFullYear().toString();
  }
}
