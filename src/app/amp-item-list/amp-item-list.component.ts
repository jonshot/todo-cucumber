import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'amp-item-list',
  templateUrl: 'amp-item-list.component.html',
  styleUrls: ['amp-item-list.component.css']
})
export class AmpItemListComponent {
  @Input() todos;
  @Output() onDone = new EventEmitter<Todo[]>();
  done() {
    this.onDone.emit(this.todos);
  }
  removeItem(index) {
    this.todos.splice(index, 1);
    this.onDone.emit(this.todos);
  }
}
