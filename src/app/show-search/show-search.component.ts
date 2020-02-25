import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms'
import { ShowDetailService } from '../show-detail.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-show-search',
  templateUrl: './show-search.component.html',
  styleUrls: ['./show-search.component.css']
})
export class ShowSearchComponent implements OnInit {
  
  @Output() searchEvent = new EventEmitter<string> ();

  search = new FormControl('', [Validators.minLength(3)]);
  constructor(private showDetailService: ShowDetailService) { }

  ngOnInit() {
  //  this.searchEvent.emit('Sherlock');
    this.search.valueChanges
    .pipe(debounceTime(1000))  
      .subscribe(
      (searchValue: string) => {
        if(!this.search.invalid && searchValue){
          this.searchEvent.emit(searchValue);
        }
      }
    )
  }
}
