import { Component, OnInit, Input } from '@angular/core';
import { ItvShow } from '../itv-show';
import { ShowScheduleService } from '../show-schedule.service';

@Component({
  selector: 'app-show-schedule',
  templateUrl: './show-schedule.component.html',
  styleUrls: ['./show-schedule.component.css']
})
export class ShowScheduleComponent implements OnInit {
  @Input() show: ItvShow[]
  constructor(private showSchedule: ShowScheduleService) { }

  ngOnInit(): void {
    this.showSchedule.getShowSchedule()
    .subscribe(data => this.show = data)
  }  
}
