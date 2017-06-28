import { TestBed, inject } from '@angular/core/testing';

import { WowApiService } from './wow-api.service';

describe('WowApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WowApiService]
    });
  });

  it('should be created', inject([WowApiService], (service: WowApiService) => {
    expect(service).toBeTruthy();
  }));
});
