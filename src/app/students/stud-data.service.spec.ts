import { TestBed } from '@angular/core/testing';

import { StudDataService } from './stud-data.service';

describe('StudDataService', () => {
  let service: StudDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
