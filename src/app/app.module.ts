import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {counterReducer} from "./reducers/counter.reducer";
import {Route, RouterModule} from '@angular/router';
import { RouteOneComponent } from './route-one/route-one.component';
import { RouteTwoComponent } from './route-two/route-two.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {TestEffects} from "./effects/test.effects";
import {TestService} from "./test.service";


const ROUTES: Route[] = [
  {
    path: '',
    component: RouteOneComponent
  },
  {
    path: 'happy',
    component: RouteTwoComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    RouteOneComponent,
    RouteTwoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.forRoot({counter: counterReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25 //  Retains last 25 states
    }),
    EffectsModule.forRoot([TestEffects]),
    RouterModule.forRoot(ROUTES)
  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
