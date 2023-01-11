import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'app/Task';
import { UiService } from 'app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  @Output() addTask: EventEmitter<Task> = new EventEmitter();

  text!: string;
  day!: string;
  reminder: boolean = false;
  showAddTask!: boolean;
  subscription!: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
    .onToggleAddTask()
    .subscribe((val) => this.showAddTask = val)
  }

  onSubmit() {
    if (!this.text) {
      alert('Please add a task!');
      return;
    }

    const newText = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    this.addTask.emit(newText);

    // @todo - emit event
    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
