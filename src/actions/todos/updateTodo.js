/* eslint-disable no-useless-catch */
import axios from 'axios';

import { actionTypes } from '../actionTypes';

export const updateTodo = (editTodoId, updatedTodo, username, password) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      axios.put(`http://localhost:3000/todos/${editTodoId}`, updatedTodo, {
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
          });
          resolve(response);
        })
        .catch(error => {
          console.log(error);
          console.log(error.response);
          reject(error.response.data);
        });

    })


  }

}

// import axios from 'axios';

// import { actionTypes } from '../actionTypes';

// export const updateTodo = (editTodoId, updatedTodo, username, password) => {
//   return async (dispatch) => {
//     try {
//       console.log(editTodoId, updatedTodo);
//       const response = await axios.put(`http://localhost:3000/todos/${editTodoId}`, updatedTodo, {
//         headers: {
//           Authorization: `Basic ${btoa(`${username}:${password}`)}`,
//         },
//       })

//       dispatch({
//         type: actionTypes.UPDATE_TODO,
//         payload: response.data.data,
//       })
//       dispatch({
//         type: actionTypes.SORT_TODOS,
//       })
//       return response;

//     } catch (error) {
//       console.log(error);
//       console.log(error.response);
//       throw error;

//     }


//   }

// }