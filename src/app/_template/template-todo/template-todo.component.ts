import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EventPing } from 'src/app/_interface/eventping';
import { ToDo } from 'src/app/_interface/todo';
import { TodoEditComponent } from '../todo-edit/todo-edit.component';


@Component({
  selector: 'app-template-todo',
  templateUrl: './template-todo.component.html',
  styleUrls: ['./template-todo.component.scss']
})
export class TemplateTodoComponent implements OnInit {

  @Input() toDo$: ToDo; // $ muss nicht gesetzt werden / $ bedeutet Datenobjekt

  @Output() ping: EventEmitter<any> = new EventEmitter<any>();

  

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  public changeCheck(event?: any): void { // ? bedeutet event muss nicht gesetzt werden / void bedeutet dass, diese funktion nichts zurückgibt
    this.toDo$.status = !this.toDo$.status; // ändert true auf false

    const eventObject: EventPing = { // EventPing ist das Daten type
      label: 'check',
      object: this.toDo$
    };
    this.ping.emit(eventObject);  // mit emit() kann man was übergeben
  }

  public edit(toDo: ToDo) {
    const dialog = this.dialog.open(TodoEditComponent)
    dialog.componentInstance.toDo$ = toDo // so kann man das toDo objekt an todo-edit witergeben
  }

  public delete(event?: any): void {
    const eventObject: EventPing = { 
      label: 'delete',
      object: this.toDo$
    };
    this.ping.emit(eventObject);
  }
}
