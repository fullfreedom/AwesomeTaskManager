import { Component, OnInit } from '@angular/core';
import { Task, TaskService } from './task.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks: Task[];
  task: Task;
  index: number;
  timer: number;

  constructor(private taskService: TaskService,
              private router: Router) { }

  ngOnInit() {
    this.timer = this.getTimer();
    this.getTasks();
  }

  private getTimer(): number {
    return new Date().getTime();
  }

  getTasks() {
    this.taskService.getTasks().then(tasks => this.tasks = tasks);
  }

  detail(index) {
    this.router.navigate(['/detail', index]);
  }

  edit(index) {
    this.router.navigate(['/edit', index]);
  }

  remove(index) {
    this.taskService.removeTask(index);
  }

  toggle(index) {
    this.taskService.toggleTask(index);
  }

  move(index, step) {
    this.taskService.moveTask(index, step);
  }
}



