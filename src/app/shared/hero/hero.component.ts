import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  @Input() keyVisualAlt: string = '';
  @Input() keyVisual: string = '';
  @Input() wrapperCssClasses: string[] = [];


  constructor() { }

  ngOnInit(): void {
  }

  buildWrapperCssClasses(classes: string[]) {
    return (classes || []).concat(['hero__section'])
  }

  buildContentClasses(keyVisual: string) {
    const classes: string[] = ['col-12', 'text-center', 'text-md-start'];

    if(!!keyVisual) {
      return classes.concat(['col-md-8', 'col-lg-7']);
    }

    return classes;
  }

}
