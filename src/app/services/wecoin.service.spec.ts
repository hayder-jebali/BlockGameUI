import { TestBed, inject } from '@angular/core/testing';

import { WecoinService } from './wecoin.service';

describe('WecoinService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WecoinService]
    });
  });

  it('should be created', inject([WecoinService], (service: WecoinService) => {
    expect(service).toBeTruthy();
  }));
});
