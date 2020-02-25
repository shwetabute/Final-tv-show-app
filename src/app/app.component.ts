import { Component } from '@angular/core';
import { ItvShow } from './itv-show';
import { ShowDetailService } from './show-detail.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tv-show-app';

  tvShow: ItvShow[];
  tvShowPre: ItvShow[];
  previous: Array<string> = [''];

  constructor(private showService: ShowDetailService) {}

  doSearch(searchValue){
    this.previous.push(searchValue)
    this.showService.getShowDetail(searchValue).
    subscribe(data => this.tvShow = data);

    if (this.previous.length > 2) {
    this.showService.getShowDetail(this.previous[this.previous.length-2]).
    subscribe(data => this.tvShowPre = data);
    }
  }
}

