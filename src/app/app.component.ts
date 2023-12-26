import { Component, inject } from '@angular/core';
import { Task } from './models/task';
import { Store } from '@ngrx/store';
import { TasksActions } from './reducers/actions/tasks.actions';
import { selectError, selectTasks } from './reducers/selectors/task.selectors';
import { AppState } from './reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  store = inject(Store);
  tasks$ = this.store.select(selectTasks);
  error$ = this.store.select(selectError);
  
  
  title = 'taskbox';
  tasks: Task[] = [
    { state: 'TASK_INBOX', id: '1', title: 'Michael Jackson tour' },
    { state: 'TASK_PINNED', id: '2', title: 'Notre Dame visit' },
  ]

  error() {
    this.store.dispatch(TasksActions.setError({ error: true }));
  }


  /**
   * Component method to trigger the archiveTask event
   */
  archiveTask(id: string) {
    this.store.dispatch(TasksActions.archiveTask({ id }));
  }

  /**
   * Component method to trigger the pinTask event
   */
  pinTask(id: string) {
    this.store.dispatch(TasksActions.pinTask({ id }));
  }

}
