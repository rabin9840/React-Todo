
import './App.css'
//  import TodoTasks from './components/TodoTasks'
// import TodoItemsList from './components/TodoItems'
import CreateModal from './components/Modals/CreateModal';
import TodoItemsList from './components/TodoItemsList'
import { useState } from 'react';
// import Modal from 'react-modal';


function App() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const openCreateModal = () => {
    setIsCreateModalOpen(true);
};

const closeCreateModal = () => {
    setIsCreateModalOpen(false);
  };
  
  return (
    <>
      <button onClick={openCreateModal}>Open Create Task</button>
      <CreateModal closeCreateModal={closeCreateModal} isCreateModalOpen={isCreateModalOpen} />
      <TodoItemsList />
    </>
  )
}

export default App
