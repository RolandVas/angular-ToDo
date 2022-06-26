import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/app/_interface/todo';
import { EventPing } from '../_interface/eventping';


@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.scss']
})
export class PageListComponent implements OnInit {

  public $todos: ToDo[];
  public $todosdone: ToDo[];

  constructor() { 
    this.$todos = [];
    this.$todosdone = []; // initializiert - sonts funktionirt das push() befhel bei der update funktion nicht 
  }

  ngOnInit(): void {
  }

  public create(event: ToDo): void {
    event.position = this.$todos.length + 1;
    this.$todos.push(event)
  }

  /**
   * wenn man auf eine todo abhackt wird changeCheck() ausgeführt was ein eventObject erstellt - besteht aus label und object (ToDo) - 
   * (ping)="update($event)"  ->  ping aus todo.ts / eventObject wurde an (ping) übergeben 
   * @param event eventObject aus todo-component
   */
  public update(event: EventPing): void {

    if ('check' === event.label) {
      console.log(`%c"${event.label}-Event" wurde getriggert.`, `color: green;`)
      console.log(event.object.status)
      if (event.object.status == false) { // das gleiche wie? --> !event.object.status
        this.$todosdone.splice(this.$todosdone.indexOf(event.object), 1); // im $todosdone[] suchen nach indexOf(ToDo) --> das aktuelle ToDo im $todosdone[] suchen
        this.$todos.push(event.object)
      } else {
        // console.log('event.object:', event.object) // object --> ToDo
        // console.log('event: ', event) // von EventPing --> label und Object (ToDo)
        // console.log(this.$todos) // array mit alle ToDo objects
        this.$todos.splice(this.$todos.indexOf(event.object), 1);
        this.$todosdone.push(event.object)
      }
    }

    if ('delete' === event.label) {
      console.log(`%c"${event.label}-Event" wurde getriggert.`, `color: green;`)
      if (event.object.status == true) { 
        this.$todosdone.splice(this.$todosdone.indexOf(event.object), 1); 
      } else {
        this.$todos.splice(this.$todos.indexOf(event.object), 1);
      }
    }


  }

}
