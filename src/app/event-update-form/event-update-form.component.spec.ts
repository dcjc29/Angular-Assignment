import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventUpdateFormComponent } from './event-update-form.component';

describe('EventUpdateFormComponent', () => {
  let component: EventUpdateFormComponent;
  let fixture: ComponentFixture<EventUpdateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventUpdateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
