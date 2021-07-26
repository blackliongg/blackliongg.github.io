import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentedPageComponent } from './talented-page.component';

describe('TalentedPageComponent', () => {
  let component: TalentedPageComponent;
  let fixture: ComponentFixture<TalentedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TalentedPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TalentedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
