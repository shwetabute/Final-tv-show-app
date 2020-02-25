import { Injectable } from '@angular/core';
import { ItvService } from './itv-service';
import { ItvShow } from './itv-show';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowDetailFakeService implements ItvService {
  private fakeShow: ItvShow [] = [ 
    {
    name: 'Gilmore Girls',
    language: 'English',
    rating: 4.0,
    genres: 'Drama',
    summary:'Gilmore Girls is a drama centering around the relationship between a thirtysomething single mother and her teen daughter living in Stars Hollow, Connecticut.',
    image: 'http://static.tvmaze.com/uploads/images/medium_portrait/4/11308.jpg',
    url: 'http://www.tvmaze.com/shows/525/gilmore-girls'
    
    }
  ]
  
  constructor() { }

  public getShowDetail(name: string):
  Observable<ItvShow[]>{

    return of(this.fakeShow);
  }
}