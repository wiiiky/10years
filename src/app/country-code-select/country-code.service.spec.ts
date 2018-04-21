import { TestBed, inject } from '@angular/core/testing';

import { CountrySelectService } from './country-select.service';

describe('CountrySelectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CountrySelectService]
    });
  });

  it('should be created', inject([CountrySelectService], (service: CountrySelectService) => {
    expect(service).toBeTruthy();
  }));
});
