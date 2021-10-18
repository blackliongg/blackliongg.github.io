import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgcCookieConsentConfig, NgcCookieConsentModule} from 'ngx-cookieconsent';
import {environment} from '../environments/environment';
import {SharedModule} from './shared/shared.module';

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
  elements:{
    messagelink: `
    <div id="cookieconsent:desc" class="cc-message">{{message}}<br>
      <a aria-label="learn more about cookies" tabindex="0" class="cc-link" href="{{cookiePolicyHref}}" target="_blank" rel="noopener">{{cookiePolicyLink}}</a> und
      <a aria-label="learn more about our privacy policy" tabindex="1" class="cc-link" href="{{privacyPolicyHref}}" rel="noopener">{{privacyPolicyLink}}</a>
    </div>
    `,
  },
  content: {
    header: 'Cookies werden auf dieser Webseite genutzt!',
    message: 'Wir verwenden Cookies um Inhalte und Anzeigen zu personalisieren, um Social-Media-Funktionen zur Verfügung zu stellen und unseren Traffic zu analysieren. Wir teilen auch Informationen über Ihre Nutzung unserer Website mit unseren Social Media-, Werbe- und Analysepartnern.',
    dismiss: 'Verstanden!',
    allow: 'Cookies zulassen',
    deny: 'Ablehnen',
    link: 'Mehr Details',
    policy: 'Cookierichtlinie anzeigen',

    cookiePolicyLink: 'Mehr über Cookies erfahren',
    cookiePolicyHref: 'https://www.cookiesandyou.com/',

    privacyPolicyLink: 'Datenschutz und Cookierichtlinie anpassen',
    privacyPolicyHref: environment.protocol + '://' + environment.domain + '/home/privacy-policy',
  }
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgcCookieConsentModule.forRoot(cookieConfig),
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
