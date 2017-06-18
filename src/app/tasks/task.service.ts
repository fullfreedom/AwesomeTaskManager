import { Injectable } from '@angular/core';

const DEMO_DATA = [
  {
    title: 'Помыть окна',
    description: 'Тщательно протереть стекла и подоконник',
    complited: false,
    deadline: 1500595200000
  },
  {
    title: 'Купить аквариум',
    description: 'Аквариум на 50 литров и не забыть про рыбок',
    complited: false,
    deadline: 1503100800000
  },
  {
    title: 'Написать компьютерную программу',
    description: 'Написать какую-нибудь программу и показать друзьям',
    complited: true,
    deadline: 1502236800000
  },
  {
    title: 'Обновить аватарку ВК',
    description: 'Сфотографироваться и выложить крутую аватарку',
    complited: false,
    deadline: 1510963200000
  },
];

export class Task {
  deadline: number;
  constructor(public title: string,
              public description: string,
              public complited: boolean = false,
              deadline: string) {
    this.deadline = Date.parse(deadline);
  }
}

@Injectable()
export class TaskService {
  private tasks: Task[];

  constructor() {
    this.setDemoData();
  }

  setDemoData() {
    this.tasks = DEMO_DATA;
  }

  getTasks(): Promise<Task[]> {
    return Promise.resolve(this.tasks);
  }

  getTask(index: number): Promise<Task> {
    return this.getTasks().then(tasks => tasks[index]);
  }

  createTask(item: Task): void {
    this.tasks.push(item);
  }

  updateTask(index: number, item: Task): void {
    this.tasks[index] = item;
  }

  removeTask(index: number): void {
    this.tasks.splice(index, 1);
  }

  moveTask(index: number, step: number): void {
    let posA = this.tasks[index];
    let posB = this.tasks[index + step];
    if (posB) {
      this.tasks[index] = posB;
      this.tasks[index + step] = posA;
    }
  }

  toggleTask(index: number): void {
    this.tasks[index].complited = !this.tasks[index].complited;
  }
}
