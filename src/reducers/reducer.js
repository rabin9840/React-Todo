import { actionTypes } from "../actions/actionTypes";

const initialState = {
    todos: [],
};

const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };
        case actionTypes.FETCH_TODOS:
            return {
                ...state,
                todos: action.payload,
            };
        case actionTypes.DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((todo) => todo._id !== action.payload),
            };
        case actionTypes.UPDATE_TODO:
            return {
                ...state,
                todos: state.todos.map((todo) => todo._id === action.payload._id ? action.payload : todo),
            };
        case actionTypes.SORT_TODOS:
            return {
                ...state,
                todos: [...state.todos].sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate)),
            };
        default:
            return state;
    }
}

export default todosReducer;