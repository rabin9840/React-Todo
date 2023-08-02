import { configureStore } from '@reduxjs/toolkit'
import todosReducer from '../reducers/reducer'
import authReducer from '../reducers/authReducer'

export default configureStore({
    reducer: {
        todos: todosReducer,
        username: authReducer,
    }
})
