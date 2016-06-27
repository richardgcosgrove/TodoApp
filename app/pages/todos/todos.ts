import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddPage } from '../add/add';

/*
  Generated class for the TodosPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/todos/todos.html',
})
export class TodosPage {
  public todoList : Array<string>;
  constructor(private nav: NavController) {}

  onPageDidEnter() {
    this.todoList = JSON.parse(localStorage.getItem("todos"));
    if (!this.todoList){
      this.todoList = [];
    }
  }

  delete(index: number){
    this.todoList.splice(index,1);
    localStorage.setItem("todos",JSON.stringify(this.todoList));
  }

  add(){
    this.nav.push(AddPage);
  }
}
