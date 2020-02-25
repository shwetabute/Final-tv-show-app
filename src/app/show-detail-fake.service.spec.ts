import { TestBed } from '@angular/core/testing';

import { ShowDetailFakeService } from './show-detail-fake.service';

describe('ShowDetailFakeService', () => {
  let service: ShowDetailFakeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowDetailFakeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
