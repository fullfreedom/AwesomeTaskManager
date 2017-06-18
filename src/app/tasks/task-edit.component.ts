import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { Task, TaskService } from './task.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})

export class TaskEditComponent implements OnInit {
  constructor( private taskService: TaskService,
               private activatedRoute: ActivatedRoute,
               private router: Router) { }

  task: Task;
  index: number;

  ngOnInit() {
    this.activatedRoute.params
        .switchMap((params: Params) => this.taskService.getTask(+params['index']))
        .subscribe(task => this.task = task);
    this.activatedRoute.params.subscribe((params: Params) => {
      this.index = +params['index'];
    });
    console.log(this.index);
  }

  update(formData) {
    let form = formData.form.controls;
    let task: Task = new Task(form.title.value, form.description.value, form.complited.value, form.deadline.value.toString());
    this.taskService.updateTask(this.index, task);
    this.goBack();
  }

  goBack(): void {
    this.router.navigate(['/create']);
  }
}























