import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AthletesFirstPageComponent } from './athletes-first-page.component';

describe('AthletesFirstPageComponent', () => {
  let component: AthletesFirstPageComponent;
  let fixture: ComponentFixture<AthletesFirstPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AthletesFirstPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AthletesFirstPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
