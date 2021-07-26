import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InclusionPageComponent } from './inclusion-page.component';

describe('InclusionPageComponent', () => {
  let component: InclusionPageComponent;
  let fixture: ComponentFixture<InclusionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InclusionPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InclusionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
