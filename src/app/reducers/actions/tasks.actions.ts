import { createActionGroup, props } from '@ngrx/store';

export const TasksActions = createActionGroup({
  source: 'Tasks',
  events: {
    'Archive Task': props<{ id: string }>(),
    'Pin Task': props<{ id: string }>(),
    'Set Error': props<{ error: boolean }>(),
  }
});




