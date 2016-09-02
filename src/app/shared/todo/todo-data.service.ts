import { Injectable } from '@angular/core';
import { Todo } from '../';

@Injectable()
export class TodoDataService {

  todos: Todo[] = null;

  getTodos(): Promise<Todo[]> {
    this.todos = JSON.parse(localStorage.getItem('todos')) || <Todo[]>[];
    return Promise.resolve(this.todos);
  }

  addTodo(todo: Todo): Todo[] {
    this.todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(this.todos));
    return this.todos;
  }

  updateTodos(todos: Todo[]) {
    this.todos = todos;
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

}
