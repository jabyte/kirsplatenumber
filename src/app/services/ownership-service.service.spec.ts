import { TestBed, inject } from '@angular/core/testing';

import { OwnershipServiceService } from './ownership-service.service';

describe('OwnershipServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OwnershipServiceService]
    });
  });

  it('should be created', inject([OwnershipServiceService], (service: OwnershipServiceService) => {
    expect(service).toBeTruthy();
  }));
});
