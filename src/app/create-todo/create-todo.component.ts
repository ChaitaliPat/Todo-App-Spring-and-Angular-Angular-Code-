import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.css']
})
export class CreateTodoComponent implements OnInit {

  todo: Todo = new Todo();
  constructor(private todoService: TodoService,
    private router: Router) { }

  ngOnInit() {
  }

  saveTodo() {
    console.log("Logged data 123 ",this.todo)
    this.todoService.createTodo(this.todo).subscribe(data => {
      
      this.goToTodoList();
    },
      error => console.log(error));
  }

  goToTodoList() {
    this.router.navigate(['/todos']);
  }

  onSubmit() {
    console.log("check data",this.todo);
    this.saveTodo()
  }

}
