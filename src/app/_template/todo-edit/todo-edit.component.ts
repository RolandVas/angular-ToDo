import { Component, Input, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ToDo } from 'src/app/_interface/todo';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.scss']
})
export class TodoEditComponent implements OnInit {

  @Input() toDo$: ToDo;

  constructor(public dialogRef: MatDialogRef<TodoEditComponent>) { }

  ngOnInit(): void {
  }

  save() {
    this.dialogRef.close();
  }

}
