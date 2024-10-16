import { TestBed } from '@angular/core/testing';

import { DataprivacyService } from './dataprivacy.service';

describe('DataprivacyService', () => {
  let service: DataprivacyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataprivacyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
