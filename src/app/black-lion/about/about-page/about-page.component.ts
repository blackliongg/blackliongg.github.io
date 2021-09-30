import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subject, Subscription} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit, OnDestroy {

  private debounce: Subject<boolean> = new Subject<boolean>();
  private debounceSubscription: Subscription | null = null;

  constructor() {
    this.debounce.pipe(
      debounceTime(400),
    );
  }

  ngOnInit(): void {
    this.debounce.asObservable().subscribe(() => AboutPageComponent.mailTo());
  }

  ngOnDestroy(): void {
    if(this.debounceSubscription) {
      this.debounceSubscription.unsubscribe();
    }
  }

  private static mailTo(): void {
    window.open('mailto:info@darkorigin.de?cc=benjamin.schlotzhauer@darkorigin.de&subject=BLACK LION SPONSORING&body=');
  }

  triggerMailTo() {
    this.debounce.next(true);
  }

}
