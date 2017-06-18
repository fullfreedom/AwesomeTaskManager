import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes }   from '@angular/router';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TaskListComponent } from './tasks/task-list.component';
import { TaskDetailComponent } from './tasks/task-detail.component';
import { TaskFormComponent } from './tasks/task-form.component';
import { TaskEditComponent } from './tasks/task-edit.component';
import { TaskService } from './tasks/task.service';

const appRoutes: Routes = [
  {
    path: 'detail/:index',
    component: TaskDetailComponent,
  },
  {
    path: 'edit/:index',
    component: TaskEditComponent
  },
  {
    path: 'create',
    component: TaskFormComponent
  },
  {
    path: '',
    redirectTo: '/create',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/create'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskDetailComponent,
    TaskFormComponent,
    TaskEditComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
      TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

