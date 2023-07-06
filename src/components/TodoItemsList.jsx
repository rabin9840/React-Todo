// import todos from "../todos";
import { useState } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import TodoItem from './TodoItem';
import DeleteModal from './Modals/DeleteModal';

const TodoItems = () => {
  const [todos, setTodos] = useState([]);

  const [deleteTodo, setDeleteTodo] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const username = "12345678";
  const password = "12345678";

  const openDeleteModal = (todoId) => {
    setDeleteTodo(todoId);
    setIsModalOpen(true);
  }

  const closeDeleteModal = () => {
    setIsModalOpen(false);
  }

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
        setTodos(todos);
      })
      .catch(error => {
        // Handle errors
        console.log(error);
      });
  };

  // const handleDeletetodo = (todoId) => {
  //   axios.delete(`http://localhost:3000/todos/${todoId}`, {
  //     headers: {
  //       Authorization: `Basic ${btoa(`${username}:${password}`)}`,
  //     },
  //   })
  //     .then(response => {
  //       console.log(response.data);
  //       setTodos(prevtodos => prevtodos.filter(todo => todo._id !== todoId));
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     }
  //     );
  // };

  const handleDelete = () => {
    axios.delete(`http://localhost:3000/todos/${deleteTodo}`, {
      headers: {
        Authorization: `Basic ${btoa(`${username}:${password}`)}`,
      },
    })
      .then(response => {
        console.log(response.data);
        setTodos(prevtodos => prevtodos.filter(todo => todo._id !== deleteTodo));
        closeDeleteModal();
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="todo-items">
      <h1>Your todos</h1>
      <button className="task-action-button" onClick={handleGetData}>Get Todos</button>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Due Date</th>
            <th>Is Active</th>
            <th>Status</th>          
            <th>Actions</th>
          </tr>
        </thead>
              <tbody>
                  {todos.map((todo, index) => (
                      // <tr key={index}>
                      //     <td>{todo._id}</td>
                      //     <td>{todo.title}</td>
                      //     <td>{todo.description}</td>
                      //     <td>{todo.dueDate.toString()}</td>
                      //     <td>{todo.isActive.toString()}</td>
                      //     <td>{todo.status}</td>
                      //     <td>
                      //         <button className="task-action-button">Edit</button>
                      //         {/* <button className="todo-action-button" onClick={()=>handleDeletetodo(todo._id)} >Delete</button> */}
                      //         <button className="task-action-button" onClick={()=>openDeleteModal(todo._id)} >Delete</button>
                          
                      // </td>
                      // </tr>
                    <TodoItem key={index} todo={todo} openDeleteModal={openDeleteModal} />
                  ))}
                  
        </tbody>
      </table>

      <DeleteModal isModalOpen={isModalOpen} closeDeleteModal={closeDeleteModal} handleDelete={handleDelete} />
      {/* <Modal
        isOpen={isModalOpen}
        onRequestClose={closeDeleteModal}
        contentLabel="Delete Confirmation"
      >
        <h2>Confirm Delete</h2>
        <p>Are you sure you want to delete this todo?</p>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={closeDeleteModal}>Cancel</button>
      </Modal> */}
    </div>
  );
};

export default TodoItems;
