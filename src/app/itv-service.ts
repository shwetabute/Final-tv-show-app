import { Observable } from 'rxjs';
import { ItvShow } from './itv-show';

export interface ItvService {
  getShowDetail(searchText: string):
  Observable<ItvShow[]>
}
