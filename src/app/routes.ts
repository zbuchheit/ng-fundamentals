import {
  CreateEventComponent,
  EventDetailsComponent,
  EventListResolver,
  EventListComponent,
  CreateSessionComponent,
  EventResolver
} from './events/index';
import { Routes } from '@angular/router';
import { Error404Component } from './errors/404.component';

export const appRoutes:Routes = [
  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  { path: 'events', component: EventListComponent, resolve: {events:EventListResolver} },
  { path: 'events/:id', component: EventDetailsComponent, resolve: {event: EventResolver}},
  { path: 'events/session/new', component: CreateSessionComponent },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module')
    .then(m => m.UserModule)
  }

]
