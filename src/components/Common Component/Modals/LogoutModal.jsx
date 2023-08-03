import React from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const LogoutModal = ({ isModalOpen, handleLogout, closeLogoutModal }) => {
	return (
		<Modal
			show={isModalOpen}
			onHide={closeLogoutModal}
		>
			<Modal.Header closeButton>
				<Modal.Title>Logout Confirmation</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<h2>Confirm Logout</h2>
				<p>Are you sure you want to Logout?</p>
			</Modal.Body>
			<Modal.Footer>
				<Button
					variant='danger'
					onClick={handleLogout}
				>
					Logout
				</Button>
				<Button
					variant='secondary'
					onClick={closeLogoutModal}
				>
					Cancel
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default LogoutModal;
