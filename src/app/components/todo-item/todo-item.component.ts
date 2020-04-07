import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TodoService } from '../../services/todo.service';

import {Todo} from '../../models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
  }

  // Set dynamic classes
  setClasses(){
    const classes = {
      todo: true,
      'is-complete': this.todo.completed
    };
    return classes;
  }

  //
  onToggle(todo){
    // Toggle UI
    todo.completed = !todo.completed;

    // Toggle on server
    this.todoService.toggleCompleted(todo).subscribe(returnedTodo => {
      console.log(returnedTodo);
    });
    console.log('This is onTogle! ' + todo.completed);
  }

  // Delete from server
  onDelete(todo){
    this.deleteTodo.emit(todo);
    console.log('Delete was clicked! ' + todo.completed);
  }

}
