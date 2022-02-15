import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { TodoDetailsComponent } from './todo-details/todo-details.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { UpdateTodoComponent } from './update-todo/update-todo.component'


const routes: Routes = [
  { path: 'todos', component: TodoListComponent },
  { path: '', redirectTo: 'todos', pathMatch: 'full' },
  { path: 'create-todo', component: CreateTodoComponent },
  { path: 'update-todo/:id', component: UpdateTodoComponent },
  { path: 'todo-details/:id', component: TodoDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
