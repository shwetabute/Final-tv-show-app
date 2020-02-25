import { Component, OnInit, Input } from '@angular/core';
import { ItvShow } from '../itv-show';
import { ShowDetailService } from '../show-detail.service';

@Component({
  selector: 'app-tv-show',
  templateUrl: './tv-show.component.html',
  styleUrls: ['./tv-show.component.css']
})

export class TvShowComponent implements OnInit {
  @Input() current: ItvShow[]
  constructor(private showDetail: ShowDetailService) { }

  ngOnInit() {}
    
}
