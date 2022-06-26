import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EventPing } from 'src/app/_interface/eventping';
import { ToDo } from 'src/app/_interface/todo';

@Component({
  selector: 'app-template-todo-form',
  templateUrl: './template-todo-form.component.html',
  styleUrls: ['./template-todo-form.component.scss']
})
export class TemplateTodoFormComponent implements OnInit {

  public ToDo$: ToDo;

  @Output() ping: EventEmitter<ToDo> = new EventEmitter<ToDo>();

  constructor() { 
    this.ToDo$ = {
      id: undefined, 
      title: '',
      description: undefined,
      status: false,
      position: 1
    }
  }

  ngOnInit(): void {
  }

  public createToDo(event?: any): void {
    this.ping.emit(this.ToDo$)
    this.ToDo$ = {
      id: undefined, 
      title: '',
      description: undefined,
      status: false,
      position: NaN
    }
    
  }

}
