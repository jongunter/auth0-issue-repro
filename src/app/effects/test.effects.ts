

import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import * as testActions from '../reducers/counter.reducer';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/observable/interval';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TestEffects {

  @Effect()
  testEffect$ = Observable
    .interval(250)
    .mapTo({
      type: testActions.INCREMENT,
      payload: null
    });

  constructor(private actions$ : Actions) {}
}
