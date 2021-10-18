import { Component, OnInit } from '@angular/core';
import {ViewportScroller} from '@angular/common';
import {Subject, Subscription} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-talented-page',
  templateUrl: './talented-page.component.html',
  styleUrls: ['./talented-page.component.scss']
})
export class TalentedPageComponent implements OnInit {

  private debounce: Subject<boolean> = new Subject<boolean>();
  private debounceSubscription: Subscription | null = null;

  constructor(private viewportScroller: ViewportScroller) {
    this.debounce.pipe(
      debounceTime(400),
    );
  }

  ngOnInit(): void {
    this.debounce.asObservable().subscribe(() => TalentedPageComponent.mailTo());
  }

  scrollTo(anchorId: string): void {
    this.viewportScroller.scrollToAnchor(anchorId);
  }

  ngOnDestroy(): void {
    if(this.debounceSubscription) {
      this.debounceSubscription.unsubscribe();
    }
  }

  private static mailTo(): void {
    window.open('mailto:info@darkorigin.de?cc=subject=BLACK+LION+NACHWUCHS+BEWERBUNG&body=');
  }

  triggerMailTo() {
    this.debounce.next(true);
  }

}
