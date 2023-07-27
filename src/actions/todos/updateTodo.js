import axios from 'axios';

import { actionTypes } from '../actionTypes';

export const updateTodo = (editTodoId, updatedTodo, username, password) => {
  return (dispatch) => {
    const update_response = axios.put(`http://localhost:3000/todos/${editTodoId}`, updatedTodo, {
      headers: {
        Authorization: `Basic ${btoa(`${username}:${password}`)}`,
      },
    })
      .then(response => {
        console.log(response.data);
        // Update the todo in the state
        // setTodos(prevTodos => prevTodos.map(todo => todo._id === editTodoId ? response.data.data : todo));
        dispatch({
          type: actionTypes.UPDATE_TODO,
          payload: response.data.data,
        })
        dispatch({
          type: actionTypes.SORT_TODOS,
        })
        return update_response;

      })
      .catch(error => {
        console.log(error);
        throw error;
      });

  }

}