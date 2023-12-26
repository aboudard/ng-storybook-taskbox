import { createSelector } from '@ngrx/store';
import { AppState } from '..';
import { TaskState } from '../tasks.reducer';


export const selectTaskState = (state: AppState) => state.task;

export const selectTasks = createSelector(
  selectTaskState,
  (state: TaskState) => state.taskList
);

export const selectError = createSelector(
  selectTaskState,
  (state: TaskState) => state.error
);