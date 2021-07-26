import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiversityPageComponent } from './diversity-page.component';

describe('DiversityPageComponent', () => {
  let component: DiversityPageComponent;
  let fixture: ComponentFixture<DiversityPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiversityPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiversityPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
