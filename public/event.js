 document.addEventListener('DOMContentLoaded', () => {
 const neuesToDoElement = document.getElementById("neuesToDo");
  
  neuesToDoElement.addEventListener('keydown', async (event) => {
      if (event.code === 'Enter') {
        const neuesToDoElement = document.getElementById('neuesToDo');
    
        const todo = { id: null,title: neuesToDoElement.value,erledigt: false };
        const request = 
        console.log(todo);
         const response = await fetch("/todo/add",
         {
          method:'POST',
          body:JSON.stringify(todo),
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
         }
         
         ).then(response=> console.log(response));
 
        neuesToDoElement.value = '';
        }
    });
  
  
  });

  async function update(checkbox,todoId){
    let done;
   if(checkbox.checked){
     done = true;
    }else{
     done = false;  
  }
    const requestTodo = { id: todoId,erledigt: done };
    const response = await fetch("/todo/update",
    {
     method:'POST',
     body:JSON.stringify(requestTodo),
     headers: {
       'Content-Type': 'application/json',
       'Accept': 'application/json'
   }
    }
    
    ).then(response=> console.log(response));
  
  }