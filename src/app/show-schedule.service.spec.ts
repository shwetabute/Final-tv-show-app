import { TestBed } from '@angular/core/testing';

import { ShowScheduleService } from './show-schedule.service';

describe('ShowScheduleService', () => {
  let service: ShowScheduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowScheduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
