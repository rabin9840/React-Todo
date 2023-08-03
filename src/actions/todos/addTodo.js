// import axios from 'axios';

// import { actionTypes } from '../actionTypes';

// export const addTodo = (task) => {
//     return (dispatch) => {
//         axios.post('http://localhost:3000/todos', task)
//             .then(response => {
//                 dispatch({
//                     type: actionTypes.ADD_TODO,
//                     payload: response.data.data,
//                 })
//                 dispatch({
//                     type: actionTypes.SORT_TODOS,
//                 })
//                 return response;
//             })
//             .catch(error => {
//                 console.log(error);
//                 console.log(error.response);
//                 return error.response.data;
//             });
//     }
// }
import axios from 'axios';
import { actionTypes } from '../actionTypes';

export const addTodo = (task) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            };
            axios.post('http://localhost:3000/todos', task, config)
                .then(response => {
                    dispatch({
                        type: actionTypes.ADD_TODO,
                        payload: response.data.data,
                    });
                    dispatch({
                        type: actionTypes.SORT_TODOS,
                    });
                    resolve(response); // Resolve the Promise with the API response
                })
                .catch(error => {
                    console.log(error);
                    console.log(error.response);
                    reject(error.response.data); // Reject the Promise with the error data
                });
        });
    };
};
