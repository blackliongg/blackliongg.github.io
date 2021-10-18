import { Component, OnInit } from '@angular/core';
import {faInstagram, faTwitch, faTwitter} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-community-page',
  templateUrl: './community-page.component.html',
  styleUrls: ['./community-page.component.scss']
})
export class CommunityPageComponent implements OnInit {

  instagram = faInstagram;
  twitter = faTwitter;
  twitch = faTwitch;

  constructor() { }

  ngOnInit(): void {
  }

}
