import { TestBed } from '@angular/core/testing';

import { MytimeService } from './mytime.service';

describe('MytimeService', () => {
  let service: MytimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MytimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
