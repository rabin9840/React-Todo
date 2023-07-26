import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import CreateModal from "./Modals/CreateModal";
import "./CreateTodos.css"; // Import the custom CSS file
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateTodos = () => {
	const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

	const openCreateModal = () => {
		setIsCreateModalOpen(true);
	};

	const closeCreateModal = () => {
		setIsCreateModalOpen(false);
	};

	return (
		<>
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
								<FaPlus className='plus-icon' />
							</Button>
						</div>
					</Col>
				</Row>
			</Container>
			<CreateModal
				closeCreateModal={closeCreateModal}
				isCreateModalOpen={isCreateModalOpen}
			/>

			<ToastContainer
				position='top-right'
				autoClose={3000}
				hideProgressBar
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
		</>
	);
};

export default CreateTodos;
