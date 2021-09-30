import { Component, OnInit } from '@angular/core';
import {ViewportScroller} from '@angular/common';

@Component({
  selector: 'app-talented-page',
  templateUrl: './talented-page.component.html',
  styleUrls: ['./talented-page.component.scss']
})
export class TalentedPageComponent implements OnInit {

  constructor(private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
  }

  scrollTo(anchorId: string): void {
    this.viewportScroller.scrollToAnchor(anchorId);
  }

}
