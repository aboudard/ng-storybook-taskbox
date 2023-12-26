import { Action, createReducer, on } from '@ngrx/store';
import { Task } from '../models/task';
import { TasksActions } from './actions/tasks.actions';

export const tasksFeatureKey = 'task';

export interface TaskState {
  taskList: Task[];
}

export const initialState: TaskState = {
  taskList: [
    { id: '1', title: 'Something', state: 'TASK_INBOX' },
    { id: '2', title: 'Something more', state: 'TASK_INBOX' },
    { id: '3', title: 'Something else', state: 'TASK_INBOX' },
    { id: '4', title: 'Something again', state: 'TASK_INBOX' },
  ],
};

export const taskReducer = createReducer(
  initialState,
  on(TasksActions.archiveTask, (state, { id }) => ({
    ...state, taskList: state.taskList.map((task) => task.id === id ? { ...task, state: 'TASK_ARCHIVED' as const } : task)
  })),
  on(TasksActions.pinTask, (state, { id }) => ({
    ...state, taskList: state.taskList.map((task) => task.id === id ? { ...task, state: 'TASK_PINNED' as const } : task)
  }))
);

export function reducer(state: TaskState | undefined, action: Action) {
  return taskReducer(state, action);
}
