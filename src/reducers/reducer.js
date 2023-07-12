import { createSlice } from '@reduxjs/toolkit';

const initialState={
    todos:[],
};

const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        },
        fetchTodos: (state, action) => {
            state.todos = action.payload;
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo._id !== action.payload);
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) => todo._id === action.payload._id ? action.payload : todo);
        },
        sortTodo: (state) => {
            state.todos.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
        },
    },
});

export const { addTodo, fetchTodos, deleteTodo, updateTodo, sortTodo } = todosSlice.actions;

export default todosSlice.reducer;