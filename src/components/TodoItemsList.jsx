// import todos from "../todos";
import { useState } from 'react';
import axios from 'axios';
import TodoItem from './TodoItem';
import DeleteModal from './Modals/DeleteModal';
import EditModal from './Modals/EditModal';

const TodoItems = () => {
  const [todos, setTodos] = useState([]);

  const [deleteTodoId, setDeleteTodoId] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [editTodoId, setEditTodoId] = useState('');
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const[editTodo,setEditTodo]=useState({});

  const username = "12345678";
  const password = "12345678";

  const openDeleteModal = (todoId) => {
    setDeleteTodoId(todoId);
    setIsModalOpen(true);
  }

  const closeDeleteModal = () => {
    setIsModalOpen(false);
  }

  const openEditModal = (todoId, todo) => {
    console.log(todo);
    console.log(todoId);

    setEditTodoId(todoId);
    setEditTodo(todo);
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {  
    setIsEditModalOpen(false);
  };

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

  // const handleDeletetodoId = (todoId) => {
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
    axios.delete(`http://localhost:3000/todos/${deleteTodoId}`, {
      headers: {
        Authorization: `Basic ${btoa(`${username}:${password}`)}`,
      },
    })
      .then(response => {
        console.log(response.data);
        setTodos(prevtodos => prevtodos.filter(todo => todo._id !== deleteTodoId));
        closeDeleteModal();
      })
      .catch(error => {
        console.log(error);
      });
  };


  const handleEdit = (updatedTodo) => {
    console.log(editTodoId);
    console.log(updatedTodo);
    axios.put(`http://localhost:3000/todos/${editTodoId}`, updatedTodo, {
      headers: {
        Authorization: `Basic ${btoa(`${username}:${password}`)}`,
      },
    })
      .then(response => {
        console.log(response.data);
        // Update the todo in the state
        setTodos(prevTodos => prevTodos.map(todo => todo._id === editTodoId ? response.data.data : todo));
        closeEditModal();
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
                    <TodoItem key={index} todo={todo} openDeleteModal={openDeleteModal} openEditModal={openEditModal} />
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
      <EditModal isEditModalOpen={isEditModalOpen} closeEditModal={closeEditModal} handleEdit={handleEdit} initialTodo={editTodo} />

      
    </div>
  );
};

export default TodoItems;
