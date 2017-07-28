import { TestBed, inject } from '@angular/core/testing';

import { GetdressService } from './getdress.service';

describe('GetdressService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetdressService]
    });
  });

  it('should be created', inject([GetdressService], (service: GetdressService) => {
    expect(service).toBeTruthy();
  }));
});
