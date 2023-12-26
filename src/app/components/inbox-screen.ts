import { Component, Input, inject } from "@angular/core";
import { Store } from "@ngrx/store";
import { selectTasks } from "../reducers/selectors/task.selectors";
import { TasksActions } from "../reducers/actions/tasks.actions";

@Component({
    selector: 'app-inbox-screen', 
    template: `
      <div *ngIf="error" class="page lists-show">
        <div class="wrapper-message">
          <span class="icon-face-sad"></span>
          <p class="title-message">Oh no!</p>
          <p class="subtitle-message">Something went wrong</p>
        </div>
      </div>
  
      <div *ngIf="!error" class="page lists-show">
        <nav>
          <h1 class="title-page">Taskbox</h1>
        </nav>
        <app-task-list (onArchiveTask)="archiveTask($event)" (onPinTask)="pinTask($event)" [tasks]="tasks$ | async"></app-task-list>
      </div>
    `,
  })
  export default class InboxScreenComponent {

    store = inject(Store);
    tasks$ = this.store.select(selectTasks);

    @Input() error: any;

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