import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/app/_interface/todo';


@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.scss']
})
export class PageListComponent implements OnInit {

  public $todos: ToDo[];
  // public $todosdone: ToDo[];

  constructor() { 
    this.$todos = [
      {
        id: 0, 
        title: 'Design erstellen',
        description: 'UX design für neue Webseiten erstellen',
        status: false,
        position: 1
      },
      {
        id: 1, 
        title: 'Design erstellen',
        description: 'UX design für neue Webseiten erstellen',
        status: false,
        position: 2
      },
      {
        id: 2, 
        title: 'Design erstellen',
        description: 'UX design für neue Webseiten erstellen',
        status: false,
        position: 3
      }
    ];
  }

  ngOnInit(): void {
  }

}
