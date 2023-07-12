import axios from 'axios';

import { actionTypes } from '../actionTypes';

export const deleteTodo = (todoId, username, password) => {
    console.log("deletetodo called");
    return async (dispatch) => {
        try {
            await axios.delete(`http://localhost:3000/todos/${todoId}`, {
                headers: {
                    Authorization: `Basic ${btoa(`${username}:${password}`)}`,
                },
            });

            dispatch({
                type: actionTypes.DELETE_TODO,
                payload: todoId,
            })
        }
        catch (error) {
            console.log(error);

        }
    }
}
