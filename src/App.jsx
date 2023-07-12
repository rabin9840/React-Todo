import "./App.css";
//  import TodoTasks from './components/TodoTasks'
// import TodoItemsList from './components/TodoItems'
import CreateModal from "./components/Modals/CreateModal";
import TodoItemsList from "./components/TodoItemsList";
import { useState } from "react";
// import Modal from 'react-modal';

import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

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
			{/* <div className="app-container">
        <h1 className="app-heading">Todos</h1>
        <button className="add-button" onClick={openCreateModal}>
          +
        </button>

      </div> */}
			<Container
				fluid
				className='d-flex align-items-center justify-content-center'
			>
				<Row className='justify-content-center'>
					<Col
						xs={12}
						md={6}
					>
						<div className='app-container'>
							<h1 className='app-heading'>Todos</h1>
							<Button
								className='add-button'
								onClick={openCreateModal}
							>
								+
							</Button>
						</div>
					</Col>
				</Row>
			</Container>
			<CreateModal
				closeCreateModal={closeCreateModal}
				isCreateModalOpen={isCreateModalOpen}
			/>
			<TodoItemsList />
		</>
	);
}

export default App;
