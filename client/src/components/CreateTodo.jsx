import React, { useState } from 'react';
import { useContext } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import CreateTodoRequest from '../api/CreateTodoRequest';
import { TokenContext } from '../App';

function CreateTodo(props) {
    const [token] = useContext(TokenContext)
    const [text, setText]= useState('');
    const queryClient = useQueryClient();

    const { mutate: createTodo } = useMutation(
        (newTodo) => CreateTodoRequest(newTodo, token),
        {
          onSettled: () => {
            queryClient.invalidateQueries('todos');
          },
        }
      );
    return (
        <form onSubmit={(e)=>{
            e.preventDefault();
            if(!text) return;
            createTodo({
                text,
            })
            setText('');
            }}>

            <input  
                type={'text'}
                value={text}
                onChange={(e)=> setText(e.target.value)}
            />

            <button
                type='submit'
            > Add</button>
        </form>
    );
}

export default CreateTodo;