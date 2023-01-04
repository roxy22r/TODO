import { HttpClient } from '@angular/common/http';
import { Component, OnInit,Injectable } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { lastValueFrom } from 'rxjs';

export interface Todo {
  uuid: string,
  title: string,
  finish: boolean
}
@Injectable({
  providedIn:'root'
})
export class TodoService  {

    rootUrl:string="http://localhost:8080/todo/" ;
    constructor(public http: HttpClient){}

    async getAll(): Promise<Todo[]>{
       return lastValueFrom(this.http.request<Todo[]>('GET',this.rootUrl));
    }

   addToDo(todo:Todo):Promise<Todo> {   
    return   lastValueFrom(this.http.request<Todo>('POST',this.rootUrl+"add",{body:todo}));

  }

   updateToDo(todo:Todo):Promise<void>{
    return  lastValueFrom(this.http.request<void>('POST',this.rootUrl+"update",{body:todo}));

  }
   deleteAll(todos:Todo[]):Promise<void> {
    return   lastValueFrom(this.http.request<void>('POST',this.rootUrl+"delete",{body:todos}));

   }
}


