import axios from 'axios';
import { actionTypes } from '../actionTypes';

// export const fetchTodos = (username, password) => {
//     return async (dispatch) => {
//         try {
//             const response = await axios.get("http://localhost:3000/todos", {
//                 headers: {
//                     Authorization: `Basic ${btoa(`${username}:${password}`)}`,
//                 },
//             });
//             console.log(response.data.data);
//             // const todos = response.data.data;
//             const todos = response.data.data.docs;
//             console.log(response.data.data.docs);
//             todos.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));

//             dispatch({
//                 type: actionTypes.FETCH_TODOS,
//                 payload: todos,
//             });
//         }
//         catch (error) {
//             console.log(error);
//         }
//     }
// }

export const fetchTodos = (username, password, currentPage, todosPerPage, filters) => {
    console.log(filters);
    return async (dispatch) => {
        try {
            console.log(filters.dueDate);
            const params = {
                page: currentPage,
                limit: todosPerPage,
                status: filters.status,
                dueDate: filters.dueDate,
                isActive: filters.isActive,
                title: filters.title
            };
            const response = await axios.get("http://localhost:3000/todos", {
                headers: {
                    Authorization: `Basic ${btoa(`${username}:${password}`)}`,
                },

                params: params,
            });
            // console.log(response.data.data);
            // // const todos = response.data.data;
            // const todos = response.data.data.docs;
            // console.log(response.data.data.totalPages);
            // console.log(response.data.data.docs);
            // todos.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));

            dispatch({
                type: actionTypes.FETCH_TODOS,
                // payload: todos,
                payload: response.data.data,
            });
        }
        catch (error) {
            console.log(error);
        }
    }
}