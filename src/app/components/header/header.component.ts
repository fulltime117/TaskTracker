import { Component } from '@angular/core';
import { UiService } from 'app/services/ui.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  title = 'Task Tracker';
  showAddTask!: boolean;
  subscription!: Subscription;

  constructor(private uiService: UiService, private router: Router,) {
    this.subscription = this.uiService
      .onToggleAddTask()
      .subscribe((val) => (this.showAddTask = val));
  }

  toggleAddTask() {
    this.uiService.toggleAddTask();
  }

  hasRouter(route: string) {
    return this.router.url === route;
  }
}
