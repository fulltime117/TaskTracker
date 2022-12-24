import { Component, OnInit } from '@angular/core';
import { TaskService } from 'app/services/task.service';
import { Task } from 'app/Task'

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(
      (tasks) =>(this.tasks = tasks)
    )
  }

  deleteTask(task: Task) {
    this.taskService
    .deleteTask(task)
    .subscribe(
      () =>(this.tasks.filter(t => t.id !== task.id))
    )
  }
}