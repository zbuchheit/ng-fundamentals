import {
  CreateEventComponent,
  EventDetailsComponent,
  EventRouteActivator,
  EventThumbnailComponent,
  EventListResolver,
  EventListComponent,
  EventService,
  CreateSessionComponent,
  SessionListComponent,
  DurationPipe
} from './events/index';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { JQ_TOKEN,
  TOASTR_TOKEN, Toastr,
  CollapsibleWellComponent,
  SimpleModalComponent,
  ModalTriggerDirective } from './common/index';
import { Error404Component } from './errors/404.component';
import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './events/nav/navbar.component';
import { appRoutes } from './routes';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

let toastr:Toastr = window['toastr'];
let jQuery = window['$'];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    EventsAppComponent,
    EventListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    NavBarComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    SimpleModalComponent,
    ModalTriggerDirective,
    DurationPipe
  ],
  providers: [
    EventService,
    {
      provide: TOASTR_TOKEN, useValue: toastr
    },
    {
      provide: JQ_TOKEN, useValue: jQuery
    },
    EventRouteActivator,
    EventListResolver,
    AuthService,
    {
    provide: 'canDeactivateCreateEvent',
    useValue: checkDirtyState
    }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component:CreateEventComponent) {
  if(component.isDirty)
    return window.confirm('You have not saved this event, do you really want to cancel?')
  return true;
}
