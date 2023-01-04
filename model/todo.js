
 let  todos = [{uuid:1,title:"kill H Game play",finish:false}];
    
 function CreateUUuuid() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

  export  function  insert(todo){
     todo.uuid = CreateUUuuid();
     console.log(todo);
    todos.push(todo);
    return todo;
    }
    
  export  function  update(uuid){
       let todo= todos.find(i=>i.uuid==uuid);
       todos[todos.indexOf(todo)].finish=!todos[todos.indexOf(todo)].finish;
    }
  export  function  get (uuid) {
    return todos.filter(i=> i.uuid==uuid);
    }

   export function remove(uuid){
    const index = todos.findIndex(item=>item.uuid==uuid);
    let todo = get(uuid);
    todos.splice(index,uuid);

   } 
  export  function  getAll(){
    return Promise.resolve(todos);
}