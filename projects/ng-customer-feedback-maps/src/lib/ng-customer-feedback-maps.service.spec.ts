import { TestBed } from '@angular/core/testing';

import { NgCustomerFeedbackMapsService } from './ng-customer-feedback-maps.service';

describe('NgCustomerFeedbackMapsService', () => {
  let service: NgCustomerFeedbackMapsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgCustomerFeedbackMapsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
