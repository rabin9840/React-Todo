import React from 'react';
import { Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoTasks from '../TodoTasks';

const CreateModal = ({ isCreateModalOpen, closeCreateModal }) => {
  return (
    <Modal show={isCreateModalOpen} onHide={closeCreateModal}>
      <Modal.Header closeButton>
        <Modal.Title>Create Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <TodoTasks closeCreateModal={closeCreateModal} />
      </Modal.Body>
    </Modal>
  );
};

export default CreateModal;
