import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.css']
})
export class ToDosComponent implements OnInit {

  toDos: Todo[];

  constructor() { }

  ngOnInit(): void {
    this.toDos = [
      {
        id: 1,
        title: 'Todo 1',
        completed: false
      },
      {
        id: 2,
        title: 'Todo 2',
        completed: true
      },
      {
        id: 3,
        title: 'Todo 3',
        completed: false
      }
    ];
  }

}
