import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import List from 'src/app/models/list';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.css']
})
export class NewListComponent implements OnInit {

  constructor(
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
	console.log("its rajat saini");
  }

  addList(value: string){
    this.taskService.createList(value).subscribe((list: List) => this.router.navigate(['/lists', list._id]));
  }
  
}
