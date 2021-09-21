import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IEvent, ISession } from '.';

@Injectable({providedIn: 'root'})
export class EventService {
  constructor(private http: HttpClient){

  }

  searchSessions(searchTerm: string): Observable<ISession[]> {
    return this.http.get<ISession[]>('/api/sessions/search?search=' + searchTerm)
      .pipe(catchError(this.handleError<ISession[]>('searchSessions')));
  }

  getEvents():Observable<IEvent[]> {
    return this.http.get<IEvent[]>('/api/events')
      .pipe(catchError(this.handleError<IEvent[]>('getEvents', [])));
  }


  getEvent(id:number):Observable<IEvent> | undefined {
    return this.http.get<IEvent>('/api/events/' + id)
    .pipe(catchError(this.handleError<IEvent>('getEvent')));
  }

  saveEvent(event: any){
    let options = { headers: new HttpHeaders({'Content-Type':'application/json'})}
    return this.http.post<IEvent>('/api/events', event, options)
    .pipe(catchError(this.handleError<IEvent>('saveEvent')));
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T)
    }
  }
}

