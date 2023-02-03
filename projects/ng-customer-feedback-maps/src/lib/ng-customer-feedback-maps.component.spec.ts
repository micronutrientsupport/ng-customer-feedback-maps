import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCustomerFeedbackMapsComponent } from './ng-customer-feedback-maps.component';

describe('NgCustomerFeedbackMapsComponent', () => {
  let component: NgCustomerFeedbackMapsComponent;
  let fixture: ComponentFixture<NgCustomerFeedbackMapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgCustomerFeedbackMapsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgCustomerFeedbackMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
