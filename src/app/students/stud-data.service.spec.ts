import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { StudDataService } from './stud-data.service';

describe('StudDataService', () => {
  let service: StudDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(StudDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
