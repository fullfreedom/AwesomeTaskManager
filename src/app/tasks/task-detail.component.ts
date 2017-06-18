import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Task, TaskService } from './task.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css'],
  providers: [ TaskService ]
})

export class TaskDetailComponent implements OnInit {
  item: Task;
  index: number;
  constructor( private taskService: TaskService,
               private route: ActivatedRoute,
               private router: Router ) { }

  ngOnInit() {
    this.route.params
        .switchMap((params: Params) => this.taskService.getTask(+params['index']))
        .subscribe(task => this.item = task);
    this.route.params.subscribe((params: Params) => {
      this.index = +params['index'];
    });
  }

  edit(index) {
    this.router.navigate(['/edit', index]);
  }
}