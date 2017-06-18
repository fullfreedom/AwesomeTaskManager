import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
    <div class="wrapper">
      <h1>Awesome task manager</h1>
      <div class="content">
        <app-task-list></app-task-list>
      </div>
      <div class="sidebar">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: [`
    .wrapper {
      width: 1000px;
      margin: 0 auto;
    }
    .content {
        width: 680px;
        float: left;
    }
    .sidebar {
        width: 290px;
        float: left;
        padding-left: 30px;
    }
  `]
})
export class AppComponent {}

