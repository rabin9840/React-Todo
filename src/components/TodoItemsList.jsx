// import todos from "../todos";
import { useState } from 'react';
import axios from 'axios';
import DeleteModal from './Modals/DeleteModal';
import EditModal from './Modals/EditModal';
import {  Button, Card, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos } from '../actions/todos/fetchTodos';
import { deleteTodo } from '../actions/todos/deleteTodo';

 

const TodoItems = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);

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
    dispatch(fetchTodos(username, password));
  };



  const handleDelete = () => {
    dispatch(deleteTodo(deleteTodoId, username, password));
    closeDeleteModal();
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
        // setTodos(prevTodos => prevTodos.map(todo => todo._id === editTodoId ? response.data.data : todo));
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
