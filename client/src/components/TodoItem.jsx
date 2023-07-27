import React, { useCallback, useEffect } from 'react';
import { useQueryClient, useMutation } from 'react-query';
import Debounce from 'lodash/debounce'

import DeleteTodoRequest from '../api/DeleteTodoRequest';
import UpdateTodoRequest from '../api/UpdateTodoRequest';
import { useState } from 'react';
import { useContext } from 'react';
import { TokenContext } from '../App';



function TodoItem({todo}) {
//console.log(todo);
  const [token] = useContext(TokenContext)
  const [text, setText] = useState(todo.text);
   const queryClient = useQueryClient();

  const { mutate: updateTodo } = useMutation((updateTodo) => {
      return UpdateTodoRequest(updateTodo, token);
    },
    {
      onSettled:()=>{
        queryClient.invalidateQueries('todos');
      }
    }
  );

  const { mutate: deleteTodo } = useMutation((updateTodo) => {
      return DeleteTodoRequest(updateTodo,token);
    },
    {
      onSettled:()=>{
        queryClient.invalidateQueries('todos');
      }
    }
  );

  const debouncedUpdateTodo = useCallback(
    Debounce(updateTodo,1000),
    [updateTodo]
    );

    useEffect(() => {
      if(text!== todo.text){
         debouncedUpdateTodo({
          ...todo,
          text,
        });
      }
    }, [text]);
    
  
 

  return (
    <div>
      <input 
        type="checkbox" 
        checked={todo.completed} 
        onChange={(e)=>updateTodo({
          ...todo,
          completed: !todo.completed,
        })} 
      />
      <input  
        type={'text'}
        value={text}
        onChange={(e)=> setText(e.target.value)} 
      />

      <button 
        onClick={ ()=> deleteTodo(todo)}  
      >Delete</button>
    
    </div>
  );
}

export default TodoItem;