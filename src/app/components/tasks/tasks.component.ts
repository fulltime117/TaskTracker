import { Component, OnInit } from '@angular/core';
import { Task} from 'app/Task'
import { TASKS } from 'app/mock-tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks: Task[] = TASKS;
}
