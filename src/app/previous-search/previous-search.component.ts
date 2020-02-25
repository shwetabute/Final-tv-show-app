import { Component, OnInit, Input } from '@angular/core';
import { ItvShow } from '../itv-show';
import { ShowDetailService } from '../show-detail.service';

@Component({
  selector: 'app-previous-search',
  templateUrl: './previous-search.component.html',
  styleUrls: ['./previous-search.component.css']
})
export class PreviousSearchComponent implements OnInit {

  @Input() current: ItvShow[]
  constructor(private showDetail: ShowDetailService) { }

  ngOnInit() {}
    
}