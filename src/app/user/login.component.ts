import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'selector-name',
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
  userName: any
  password: any
  constructor() { }

  ngOnInit() { }
  login(formValue: any){
    console.log(formValue);
  }
}
