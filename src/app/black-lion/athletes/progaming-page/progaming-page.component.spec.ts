import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgamingPageComponent } from './progaming-page.component';

describe('ProgamingPageComponent', () => {
  let component: ProgamingPageComponent;
  let fixture: ComponentFixture<ProgamingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgamingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgamingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
