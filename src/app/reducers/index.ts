import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import * as fromTasks from './tasks.reducer';


export interface AppState {
  task: fromTasks.TaskState;
}

export const reducers: ActionReducerMap<AppState> = {
  task: fromTasks.reducer,
};


export const metaReducers: MetaReducer<AppState>[] = isDevMode() ? [] : [];
