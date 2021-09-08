import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  templateUrl: './login.component.html',
  styles: [`
  em { float:right; color:#E05C65; padding-left:10px; }
  `]
})

export class LoginComponent implements OnInit {
  userName: any
  password: any
  mouseoverLogin: any;
  constructor( private authService: AuthService, private router: Router) { }

  ngOnInit() { }
  login(formValues: any){
    this.authService.loginUser(formValues.username, formValues.password);
    this.router.navigate(['events']);
  }

  cancel() {
    this.router.navigate(['events']);
  }
}
