import axios from 'axios';

export const fetchRecentTodos = (username, password) => {
    return async (dispatch) => {
        try {
            // Make the API request to fetch the first 10 todos
            const response = await axios.get('http://localhost:3000/todos/recentTodos', {
                headers: {
                    Authorization: `Basic ${btoa(`${username}:${password}`)}`,
                },
            });

            const recentTodos = response.data.data; // Assuming the response contains the first 10 todos

            // Dispatch the action to store the first 10 todos in the state
            console.log(recentTodos);
            dispatch({ type: 'FETCH_RECENT_TEN_TODOS_SUCCESS', payload: recentTodos });
        } catch (error) {
            // Handle any errors
            // dispatch({ type: 'FETCH_FIRST_TEN_TODOS_FAILURE', payload: error.message });
            console.log(error);
        }
    };
};
