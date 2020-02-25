import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ItvShow } from './itv-show';
import { ItvShowData } from './itv-show-data';

@Injectable({
  providedIn: 'root'
})

export class ShowScheduleService {

  constructor(private httpClient: HttpClient) { }

  getShowSchedule(): Observable<ItvShow[]>{
    return this.httpClient.get<ItvShowData[]>(
      `${environment.baseUrl}api.tvmaze.com/schedule`
    ).pipe(map(data => this.transformToItvshow(data)));
  }

  private transformToItvshow(data: ItvShowData[]) : ItvShow[]{
      var i: number;
      var result :ItvShow[] = [];
      for (i=0; (i < data.length && i < 20); i++){

        result[i] = {
          name: data[i].show.name,
          language: data[i].show.language,
          rating: data[i].show.rating.average,
          genres: data[i].show.genres,
          summary: this.replace(data[i].show.summary),
          image: data[i].show.image ? data[i].show.image.medium : "",
          //image: data[i].show.url,
          url: data[i].show.url
          //country: data.show.network.country.name
        }
      }
      return result;
    }

    private replace (html : string) {
      var div = document.createElement("div");
      div.innerHTML = html;
      return( div.textContent || div.innerText || "");
    }
}
