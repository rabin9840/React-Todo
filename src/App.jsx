import "./App.css";
//  import TodoTasks from './components/TodoTasks'
// import TodoItemsList from './components/TodoItems'
// import CreateModal from "./components/Modals/CreateModal";
// import TodoItemsList from "./components/TodoItemsList";
// import { useState } from "react";
// import Modal from 'react-modal';
// import CreateTodos from "./components/TodosList/CreateTodos";

// import { Container, Row, Col, Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

import TodoListPage from "./pages/TodoListPage";

function App() {
	// const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

	// const openCreateModal = () => {
	// 	setIsCreateModalOpen(true);
	// };

	// const closeCreateModal = () => {
	// 	setIsCreateModalOpen(false);
	// };

	return (
		<>
			<TodoListPage />
		</>
	);
}

export default App;
