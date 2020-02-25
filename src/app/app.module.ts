import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { AppComponent } from './app.component';
import { TvShowComponent } from './tv-show/tv-show.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ShowSearchComponent } from './show-search/show-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowScheduleComponent } from './show-schedule/show-schedule.component';
import { PreviousSearchComponent } from './previous-search/previous-search.component'


@NgModule({
  declarations: [
    AppComponent,
    TvShowComponent,
    ShowSearchComponent,
    ShowScheduleComponent,
    PreviousSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
