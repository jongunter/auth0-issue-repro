import { ActionReducer, Action } from '@ngrx/store';
import {createSelector} from "reselect";

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

export function counterReducer(state: number = 0, action: Action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;

    case DECREMENT:
      return state - 1;

    case RESET:
      return 0;

    default:
      return state;
  }
}

export const getCounterPlusTwo = (state: number) => {
  console.log('SELECTOR 1 - running');
  return state + 2;
}

const getState = (state) => state;

export const getCounterPlusThree = createSelector(
  getState,
  (state: number) => {
    console.log('SELECTOR 2 - running');
    return state + 3;
  }
)
