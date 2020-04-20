import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextEventSectionComponent } from './next-event-section.component';

describe('NextEventSectionComponent', () => {
  let component: NextEventSectionComponent;
  let fixture: ComponentFixture<NextEventSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextEventSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextEventSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
