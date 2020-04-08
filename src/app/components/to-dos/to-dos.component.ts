import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.css']
})
export class ToDosComponent implements OnInit {

  toDos: Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(todos => {
      this.toDos = todos;
    });
  }

  deleteTodo(todo: Todo): void{
    // Handle UI deletion (could be moved to service, but this way should be faster from not having to wait
    this.toDos = this.toDos.filter(t => t.id !== todo.id);

    // Handle server
    this.todoService.deleteTodo(todo).subscribe();
  }

  addTodo(todo: Todo){
    this.todoService.addTodo(todo).subscribe(returnedTodo => {
      this.toDos.push(returnedTodo);
    });
  }
}
