import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { EventAddFormComponent } from './event-add-form/event-add-form.component';
import {FormsModule} from '@angular/forms';
import {HomeComponent} from './home/home.component';
import { EventsListComponent } from './events-list/events-list.component';
import {CalendarModule, DateAdapter} from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CalendarViewComponent } from './calendar-view/calendar-view.component';
import { EventUpdateFormComponent } from './event-update-form/event-update-form.component';
import { DeleteEventModalComponent } from './delete-event-modal/delete-event-modal.component';

@NgModule({
    declarations: [
        AppComponent,
        EventAddFormComponent,
        HomeComponent,
        EventsListComponent,
        CalendarViewComponent,
        EventUpdateFormComponent,
        EventsListComponent,
        DeleteEventModalComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
