import { TestBed, inject } from '@angular/core/testing';

import { PhysicalServiceService } from './physical-service.service';

describe('PhysicalServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhysicalServiceService]
    });
  });

  it('should be created', inject([PhysicalServiceService], (service: PhysicalServiceService) => {
    expect(service).toBeTruthy();
  }));
});
