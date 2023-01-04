import { Component, OnInit,Inject, AfterViewInit } from '@angular/core';
import { TodoService } from '../todo.service';

export interface Todo {
  uuid: string,
  title: string,
  finish: boolean
}
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements AfterViewInit {
  
  todos: Todo[] = [];
constructor(@Inject(TodoService)private service:TodoService){}
 async ngAfterViewInit(): Promise<void> {
    this.todos = await this.service.getAll();
  }
  


   async addToDo(event: any) {   
    if(event.key === "Enter") {
      if (event.target.value.trim() == ""){
        return;
      }
      let todo : Todo = {
        uuid: "",
        title: event.target.value,
        finish: false
      }
       const newTodo= await this.service.addToDo(todo);
      this.todos.push(newTodo);
      event.target.value = "";
    }
  }

  async updateToDo(event:any){
    let todo = this.todos.find(item=> item.uuid==event.target.id);
    if(todo != null){
      todo.finish = !todo.finish;
      event.target.checked= !todo.finish;
       const response = await this.service.updateToDo(todo);
    }
  }


async deleteAll() {
const todosToDelete:Todo[]= this.todos.filter(item=>item.finish==true) ;
console.log(this.todos);
console.log(todosToDelete);
 const response = await this.service.deleteAll(todosToDelete);
todosToDelete.forEach(i=> this.todos.splice (this.todos.indexOf(i),1));
}
}