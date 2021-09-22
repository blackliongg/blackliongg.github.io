import { Component, OnInit } from '@angular/core';
import {NgcCookieConsentService} from 'ngx-cookieconsent';

@Component({
  selector: 'app-privacy-policy-page',
  templateUrl: './privacy-policy-page.component.html',
  styleUrls: ['./privacy-policy-page.component.scss']
})
export class PrivacyPolicyPageComponent implements OnInit {

  constructor(private ccService: NgcCookieConsentService) { }

  ngOnInit(): void {
  }

  clearCookieStatus() {
    this.ccService.clearStatus();
    window.location.reload();
  }

}
