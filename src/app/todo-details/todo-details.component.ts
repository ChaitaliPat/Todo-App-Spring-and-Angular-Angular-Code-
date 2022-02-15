import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {

  id: number
  todo: Todo
  constructor(private route: ActivatedRoute,
    private todoService: TodoService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.todo = new Todo();
    this.todoService.getTodoById(this.id).subscribe(data => {
      this.todo = data;
    })
  }


}
