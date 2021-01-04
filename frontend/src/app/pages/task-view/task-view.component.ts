import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import List from 'src/app/models/list';
import Task from 'src/app/models/task';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.css']
})
export class TaskViewComponent implements OnInit {

  lists: List[] = [];
  tasks: Task[] = [];
  listId: string;
  listTitle: string;
  taskTitle: string;
  list: List;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.taskService.getLists()
      .subscribe((lists: List[]) => this.lists = lists);

    this.route.params.subscribe((params: Params) => {
      this.listId = params.listId;
      if(!this.listId) return;
      this.taskService.getTasks(this.listId).subscribe((tasks: Task[]) => this.tasks = tasks);
    });
  }

  onTaskComplete(task: Task){
    this.taskService.setCompleted(this.listId, task)
      .subscribe(() => task.completed = !task.completed);
  }

  onAddTask(){
    if(!this.listId){
      alert("Please select a list");
      return;
    }
    this.router.navigate(['new-task'], { relativeTo: this.route });
  }

  deleteTask(task: Task){
    this.taskService.deleteTask(this.listId, task._id).subscribe((task: Task) => this.tasks = this.tasks.filter( t => t._id != task._id ));
  }

  deleteList(list: List){
    this.taskService.deleteList(list._id).subscribe((list: List) => this.lists = this.lists.filter( l => l._id != list._id ));
  }
}
