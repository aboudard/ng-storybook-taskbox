import { Component } from '@angular/core';
import { Task } from './models/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'taskbox';
  tasks: Task[] = [
    { state: 'TASK_INBOX', id: '1', title: 'Michael Jackson tour' },
    { state: 'TASK_PINNED', id: '2', title: 'Notre Dame visit' },
  ]
}
