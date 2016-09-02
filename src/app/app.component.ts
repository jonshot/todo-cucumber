import { Component, OnInit, Output , EventEmitter } from '@angular/core';
import { Todo, TodoDataService } from './shared';
import { AmpItemListComponent } from './amp-item-list'; 
import { AmpAddItemComponent } from './amp-add-item';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [AmpItemListComponent, AmpAddItemComponent],
  providers: [TodoDataService]
})
export class AppComponent implements OnInit {

  @Output() onAdded = new EventEmitter<Todo[]>();

  todos: Todo[] = [];

  constructor(private todoDataService: TodoDataService) { }

  getTodos(): void {
    this.todoDataService.getTodos().then(todos => this.todos = todos);
  }

  ngOnInit(): void {
    this.getTodos();
  }

  addTodo(todo) {
    this.todos = this.todoDataService.addTodo(todo);
    this.onAdded.emit(this.todos);
  }

  updateTodos(todos) {
    this.todoDataService.updateTodos(todos);
  }

}
