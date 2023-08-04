import axios from 'axios';
// import { toast } from "react-toastify";


import { actionTypes } from '../actionTypes';

export const deleteTodo = (todoId) => {
    console.log("deletetodo called");
    return async (dispatch) => {
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
                withCredentials: true,
            };

            // For basic authentication
            // const response = await axios.delete(`http://localhost:3000/todos/${todoId}`, {
            //     headers: {
            //         Authorization: `Basic ${btoa(`${username}:${password}`)}`,
            //     },
            // });

            // For cookie based authentication
            const response = await axios.delete(`http://localhost:3000/todos/${todoId}`, config);

            console.log(response);
            dispatch({
                type: actionTypes.DELETE_TODO,
                payload: todoId,
            })
            return response;
        }
        catch (error) {
            console.log(error);
            console.log(error);
            console.log(error.response.data.message);
            // toast.warning(error.response.data.message, { autoClose: 3000 });
            throw error;

        }
    }
}
