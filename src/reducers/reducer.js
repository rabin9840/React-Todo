import { actionTypes } from "../actions/actionTypes";

const initialState={
    todos:[],
};

const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo) => todo._id !== action.payload),
            };
         case actionTypes.FETCH_TODOS:
            return {
                ...state,
                todos: action.payload,
            };
        default:
            return state;
    }
}

export default todosReducer;