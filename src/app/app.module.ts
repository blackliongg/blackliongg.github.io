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
    header: 'Cookies werden auf dieser Webseite genutzt!',
    message: 'Wir verwenden Cookies um Inhalte und Anzeigen zu personalisieren, um Social-Media-Funktionen zur Verfügung zu stellen und unseren Traffic zu analysieren. Wir teilen auch Informationen über Ihre Nutzung unserer Website mit unseren Social Media-, Werbe- und Analysepartnern.',
    dismiss: 'Verstanden!',
    allow: 'Cookies zulassen',
    deny: 'Ablehnen',
    link: 'Mehr Details',
    policy: 'Cookierichtlinie anzeigen'
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
