import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BlockUIModule } from 'ng-block-ui';
import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { RemindersManagerComponent } from './reminders-manager/reminders-manager.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    RemindersManagerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    BlockUIModule.forRoot({ message: 'Loading...' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
