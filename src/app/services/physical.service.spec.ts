import { TestBed, inject } from '@angular/core/testing';

import { PhysicalService } from './physical.service';

describe('PhysicalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhysicalService]
    });
  });

  it('should be created', inject([PhysicalService], (service: PhysicalService) => {
    expect(service).toBeTruthy();
  }));
});
