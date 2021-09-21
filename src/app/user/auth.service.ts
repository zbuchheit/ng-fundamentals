import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IUser } from './user.model';

@Injectable({providedIn: 'root'})
export class AuthService {
  currentUser:IUser

  constructor(private http: HttpClient){

  }
  loginUser(userName: string, password: string){

    let loginInfo = { username: userName, password: password};
    let options = { headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.post('/api/login', loginInfo, options)
    .pipe(tap(data => {
      this.currentUser = <IUser>data['user'];
    }))
    .pipe(catchError(err => {
      return of(false);
    }))

    // this.currentUser = {
    //   id: 1,
    //   userName: userName,
    //   firstName: 'John',
    //   lastName: 'Papa'
    // }
  }

  isAuthenticated() {
    return !!this.currentUser;
  }

  updateCurrentUser(firstName: string, lastName: string){
    this.currentUser.firstName = firstName;
    this.currentUser.lastName = lastName;
  }

}
