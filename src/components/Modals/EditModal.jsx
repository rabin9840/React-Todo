import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

const EditModal = ({ isEditModalOpen, closeEditModal, handleEdit, initialTodo }) => {
  const [todo, setTodo] = useState(initialTodo);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTodo((prevTodo) => ({ ...prevTodo, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(todo);
    handleEdit(todo);
    closeEditModal();
  };

  return (
    <Modal show={isEditModalOpen} onHide={closeEditModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>Edit Todo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Title:</Form.Label>
            <Form.Control
              type="text"
              name="title"
              placeholder={todo.title ? undefined : initialTodo.title}
              value={todo.title}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Description:</Form.Label>
            <Form.Control
              type="text"
              name="description"
              placeholder={todo.description ? undefined : initialTodo.description}
              value={todo.description}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Due Date:</Form.Label>
            <Form.Control
              type="date"
              name="dueDate"
              value={todo.dueDate}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Is Active:</Form.Label>
            <Form.Control
              as="select"
              name="isActive"
              value={todo.isActive}
              onChange={handleInputChange}
            >
              <option value={true}>True</option>
              <option value={false}>False</option>
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Status:</Form.Label>
            <Form.Control
              as="select"
              name="status"
              value={todo.status}
              onChange={handleInputChange}
            >
              <option value="todo">Todo</option>
              <option value="ongoing">Ongoing</option>
              <option value="completed">Completed</option>
            </Form.Control>
          </Form.Group>

          <div className="text-center">
            <Button variant="primary" type="submit" className="mr-2">
              Save
            </Button>
            <Button variant="secondary" onClick={closeEditModal}>
              Cancel
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditModal;
