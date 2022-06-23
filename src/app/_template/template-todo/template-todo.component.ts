import { Component, OnInit, Input } from '@angular/core';
import { ToDo } from 'src/app/_interface/todo';


@Component({
  selector: 'app-template-todo',
  templateUrl: './template-todo.component.html',
  styleUrls: ['./template-todo.component.scss']
})
export class TemplateTodoComponent implements OnInit {

  @Input() toDo$: ToDo; // $ muss nicht gesetzt werden / $ bedeutet Datenobjekt

  

  constructor() {
    this.toDo$ =; 
  }

  ngOnInit(): void {
  }

  public changeCheck(event?: any): void { // ? bedeutet event muss nicht gesetzt werden / void bedeutet dass, diese funktion nichts zurückgibt
    this.toDo$.status = !this.toDo$.status; // ändert true auf false
  }

}
