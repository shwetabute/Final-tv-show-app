import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ShowDetailService } from './show-detail.service';
//import { HttpClient } from '@angular/common/http';

describe('ShowDetailService', () => {
  //let service: ShowDetailService;

  beforeEach(() =>TestBed.configureTestingModule({

    imports: [HttpClientTestingModule]
    
  }));

  it('should be created', () => {
    const service: ShowDetailService = TestBed.get(ShowDetailService);
    expect(service).toBeTruthy();
  });
});
