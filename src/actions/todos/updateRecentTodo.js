import axios from 'axios';

import { actionTypes } from '../actionTypes';

export const updateRecentTodo = (editTodoId, updatedTodo, username, password) => {
    return (dispatch) => {
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
                    type: actionTypes.UPDATE_RECENT_TODO,
                    payload: response.data.data,
                })

            })
            .catch(error => {
                console.log(error);
            });

    }

}