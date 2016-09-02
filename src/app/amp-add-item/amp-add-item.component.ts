import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo, TodoDataService } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'amp-add-item',
  templateUrl: 'amp-add-item.component.html',
  styleUrls: ['amp-add-item.component.css']
})
export class AmpAddItemComponent implements OnInit {

  @Output() onAdded = new EventEmitter<Todo>();

  todos: Todo[] = [];
  constructor(private todoDataService: TodoDataService) { }

  ngOnInit(): void {
    this.todoDataService.getTodos().then(todos => this.todos = todos);
  }

  add(name) {
    let todo = new Todo();
    todo.name = name;
    todo.done = false;
    this.onAdded.emit(todo);
  }

}
