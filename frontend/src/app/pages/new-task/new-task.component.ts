import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import Task from 'src/app/models/task';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  listId: string;

  constructor(
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.listId = params.listId;
      console.log(this.listId);
    });
  }

  addTask(value: string){

    this.taskService.createTask(this.listId, value)
      .subscribe((task: Task) => this.router.navigate(['../'], { relativeTo: this.route}));
  }
}
