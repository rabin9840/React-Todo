import { Container, Row, Col, Button } from "react-bootstrap";
import CreateModal from "../Modals/CreateModal";
import { useState } from "react";

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
		</>
	);
};

export default CreateTodos;
