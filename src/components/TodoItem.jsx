// import { useState } from "react";
// import axios from "axios";

const TodoItem = ({ todo, openDeleteModal, openEditModal }) => {
    return (
        <tr>
        <td>{todo._id}</td>
        <td>{todo.title}</td>
        <td>{todo.description}</td>
        <td>{todo.dueDate.toString()}</td>
        <td>{todo.isActive.toString()}</td>
        <td>{todo.status}</td>
        <td>
            <button className="task-action-button" onClick={()=>openEditModal(todo._id,todo)}>Edit</button>
            {/* <button className="todo-action-button" onClick={()=>handleDeletetodo(todo._id)} >Delete</button> */}
            <button className="task-action-button" onClick={()=>openDeleteModal(todo._id)} >Delete</button>
        
    </td>
    </tr>
    )
}

export default TodoItem;