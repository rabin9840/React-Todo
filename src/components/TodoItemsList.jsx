// import todos from "../todos";
import { useState } from 'react';
import axios from 'axios';
import TodoItem from './TodoItem';
import DeleteModal from './Modals/DeleteModal';
import EditModal from './Modals/EditModal';
import { Table, Button, Card, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
 

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
      <Button variant="primary" onClick={handleGetData}>Get Todos</Button>
<Row className="card-container">
        {todos.map((todo, index) => (
          <Col key={index} md={4} sm={6} xs={12}>
            <Card className="todo-card">
              <Card.Body>
                <Card.Title className="todo-title">{todo.title}</Card.Title>
                <Card.Text className="todo-description">{todo.description}</Card.Text>
                <Card.Text>
                  <span className="due-date">Due Date: </span>
                  <span className="due-date-value">{todo.dueDate.toString()}</span>
                </Card.Text>
                <Card.Text>
                  <span className="todo-info">Is Active: </span>
                  <span className="todo-info-value">{todo.isActive.toString()}</span>
                </Card.Text>
                <Card.Text>
                  <span className="todo-info">Status: </span>
                  <span className="todo-info-value">{todo.status}</span>
                </Card.Text>
                <div className="card-buttons">
                  <Button variant="info" onClick={() => openEditModal(todo._id, todo)}>Edit</Button>
                  <Button variant="danger" onClick={() => openDeleteModal(todo._id)}>Delete</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <DeleteModal isModalOpen={isModalOpen} closeDeleteModal={closeDeleteModal} handleDelete={handleDelete} />
      <EditModal isEditModalOpen={isEditModalOpen} closeEditModal={closeEditModal} handleEdit={handleEdit} initialTodo={editTodo} />
    </div>
  );
};

export default TodoItems;
