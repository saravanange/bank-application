import { TestBed } from '@angular/core/testing';

import { BankRestserviceService } from './bank-restservice.service';

describe('BankRestserviceService', () => {
  let service: BankRestserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BankRestserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
