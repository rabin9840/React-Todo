// import tasks from "../tasks";
import { useState } from 'react';
import axios from 'axios';

const TodoItems = () => {
  const [tasks,setTasks] = useState([]);

  const username = "12345678";
  const password = "12345678";
  
  const handleGetData = () => {
    axios.get("http://localhost:3000/todos", {
      headers: {
        Authorization: `Basic ${btoa(`${username}:${password}`)}`,
      },
    })
      .then(response => {
        // Handle the response
        console.log(response.data.data);
        const todos = response.data.data;
        setTasks(todos);
      })
      .catch(error => {
        // Handle errors
        console.log(error);
      });
  };

  const deleteTask = (taskId) => {
    axios.delete(`http://localhost:3000/todos/${taskId}`, {
      headers: {
        Authorization: `Basic ${btoa(`${username}:${password}`)}`,
      },
    })
      .then(response => {
        console.log(response.data);
        setTasks(prevTasks => prevTasks.filter(task => task._id !== taskId));
      })
      .catch(error => {
        console.log(error);
      }
      );
  };
  return (
    <div className="todo-items">
      <h1>Your Tasks</h1>
      <button className="task-action-button" onClick={handleGetData}>Get Todos</button>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Task Title</th>
            <th>Task Description</th>
            <th>Due Date</th>
            <th>Is Active</th>
            <th>Status</th>          
            <th>Actions</th>
          </tr>
        </thead>
              <tbody>
                  {tasks.map((task, index) => (
                      <tr key={index}>
                          <td>{task._id}</td>
                          <td>{task.title}</td>
                          <td>{task.description}</td>
                          <td>{task.dueDate.toString()}</td>
                          <td>{task.isActive.toString()}</td>
                          <td>{task.status}</td>
                          <td>
                              <button className="task-action-button">Edit</button>
                              <button className="task-action-button" onClick={()=>deleteTask(task._id)} >Delete</button>
                          </td>
                      </tr>
                  ))}
                  
        </tbody>
      </table>
    </div>
  );
};

export default TodoItems;
