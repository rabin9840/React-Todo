import { configureStore } from '@reduxjs/toolkit'
import todosReducer from '../reducers/reducer'

export default configureStore({
    reducer: {
        todos: todosReducer,
    }
})
