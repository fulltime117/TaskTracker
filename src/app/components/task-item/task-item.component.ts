import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'app/Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onDelete(task: any) {
    this.onDeleteTask.emit(task);
  }

  onToggle(task: any) {
    console.log('task', task);
    this.onToggleReminder.emit(task);
  }
}
