import axios from 'axios';

import { actionTypes } from '../actionTypes';

export const addTodo = (task) => {
    return (dispatch) => {
        axios.post('http://localhost:3000/todos', task)
        .then(response => {
            dispatch({
                type: actionTypes.ADD_TODO,
                payload: response.data.data,
            })
            dispatch({
                type: actionTypes.SORT_TODOS,
            })
        })
        .catch(error => {
            console.log(error);
        });
    }
}
