import { TestBed } from '@angular/core/testing';

import { HeadlinService } from './headlin-service.service';

describe('HeadlinServiceService', () => {
  let service: HeadlinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeadlinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
