import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgcCookieConsentConfig, NgcCookieConsentModule} from 'ngx-cookieconsent';
import {environment} from '../environments/environment';

const cookieConfig: NgcCookieConsentConfig = {
  cookie: {
    domain: environment.cookieConsent.cookieDomain // or 'your.domain.com' // it is mandatory to set a domain, for cookies to work properly (see https://goo.gl/S2Hy2A)
  },
  palette: {
    popup: {
      background: '#000'
    },
    button: {
      background: '#f69'
    }
  },
  theme: 'edgeless',
  type: 'opt-out',
  content: {
    header: "Cookies werden auf dieser Webseite genutzt!",
    message: "Die Webseite nutzt Cookies um eine hervoragende Nutzererfahrung sicherzustellen.",
    dismiss: 'Verstanden!',
    allow: 'Cookies zulassen',
    deny: 'Ablehnen',
    link: 'Mehr erfahren',
    policy: 'Cookie Richtlinie'
  }
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgcCookieConsentModule.forRoot(cookieConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
