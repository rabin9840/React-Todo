import axios from 'axios';

import { actionTypes } from '../actionTypes';

export const deleteRecentTodo = (todoId, username, password) => {
    console.log("deletetodo called");
    return async (dispatch) => {
        try {
            const response = await axios.delete(`http://localhost:3000/todos/${todoId}`, {
                headers: {
                    Authorization: `Basic ${btoa(`${username}:${password}`)}`,
                },
            });

            dispatch({
                type: actionTypes.DELETE_TODO,
                payload: todoId,
            })
            return response;
        }
        catch (error) {
            console.log(error);
            throw error;

        }
    }
}
