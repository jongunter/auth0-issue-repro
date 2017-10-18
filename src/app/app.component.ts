import { Component } from '@angular/core';
import {Store} from "@ngrx/store";
import {DECREMENT, INCREMENT, RESET} from "./reducers/counter.reducer";
import {Observable} from "rxjs";
import Auth0Lock from 'auth0-lock';
import * as auth0 from 'auth0-js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  counter: Observable<number>;

  auth: auth0.WebAuth;

  lock: Auth0Lock;

  constructor(private store: Store<any>){
  
    this.auth = new auth0.WebAuth({
      clientID: 'Qc6z1LKgJlS0EE7QexXW5knETotfaIdE',
      domain: 'jon-test.auth0.com',
      responseType: 'token id_token',
      audience: 'https://jon-test.auth0.com/userinfo',
      redirectUri: 'http://localhost:4200/callback',
      scope: 'openid'
    });
  }

  logIn(){
    this.auth.popup.authorize({}, function(){
      console.log('auth callback', arguments)
    });
  }

  increment(){
    this.store.dispatch({ type: INCREMENT });
  }

  decrement(){
    this.store.dispatch({ type: DECREMENT });
  }

  reset(){
    this.store.dispatch({ type: RESET });
  }

}
