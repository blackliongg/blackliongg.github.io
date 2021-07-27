import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  @Input() wrapperCssClasses: string[] = [];
  @Input() gridWrapperCssClasses: string[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  buildWrapperCssClasses(classes: string[]) {
    return (classes || []).concat(['section'])
  }

}
