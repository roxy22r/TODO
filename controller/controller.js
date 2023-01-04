import { getAll,get,insert,update,remove} from '../model/todo.js'

export async function listAll(request,response){
    console.log("Show: "+request);
    const data = await getAll();
   return response.json(data);
}

export async  function updateToDo(request, response){
    if(null !=request.body.uuid){
     const uuid = request.body.uuid;
     console.log("update",uuid);
     update(uuid);
    }

}

export async  function addToDo(request, response){
    console.log("add"+ request);
    let todo = {
        uuid: request.body.uuid,
        title: request.body.title,
        finish: request.body.finish
    }

    let newTodo = await insert(todo);
    return response.json(newTodo);
}

export async  function deleteToDo(request, response){
    const uuid = await get(parseInt(request.params.uuid, 10));
    await remove(uuid);  
    return response.status(204).json() ;
}

function sortTodoByTitle(todos){
  return todos.sort((do1,do2)=>do1.titel.localeCompare(do2.titel));
}

