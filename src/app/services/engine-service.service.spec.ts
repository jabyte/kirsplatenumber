import { TestBed, inject } from '@angular/core/testing';

import { EngineServiceService } from './engine-service.service';

describe('EngineServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EngineServiceService]
    });
  });

  it('should be created', inject([EngineServiceService], (service: EngineServiceService) => {
    expect(service).toBeTruthy();
  }));
});
