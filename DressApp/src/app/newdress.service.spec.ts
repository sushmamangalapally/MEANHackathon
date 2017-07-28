import { TestBed, inject } from '@angular/core/testing';

import { NewdressService } from './newdress.service';

describe('NewdressService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewdressService]
    });
  });

  it('should be created', inject([NewdressService], (service: NewdressService) => {
    expect(service).toBeTruthy();
  }));
});
