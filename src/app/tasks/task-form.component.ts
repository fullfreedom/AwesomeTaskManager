import { Component, OnInit } from '@angular/core';
import { Task, TaskService } from './task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})

export class TaskFormComponent implements OnInit {

  constructor(private taskService: TaskService) { }
  ngOnInit() {

  }
  private title: string;
  private description: string;
  private deadline: string;
  createTask() {
    let task: Task = new Task(this.title, this.description, false, this.deadline);
    this.taskService.createTask(task);
  }
}