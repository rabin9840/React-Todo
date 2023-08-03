import React, { useState } from "react";
import Button from "react-bootstrap";
import LogoutModal from "./Modals/LogoutModal";

const LogoutButton = () => {
	const [showModal, setShowModal] = useState(false);

	const handleLogout = () => {
		console.log("Logout logic");
		setShowModal(false);
	};

	const openLogoutModal = () => {
		setShowModal(true);
	};
	const closeLogoutModal = () => {
		setShowModal(false);
	};

	return (
		<>
			<Button
				variant='primary'
				onClick={openLogoutModal}
			>
				Logout
			</Button>
			<LogoutModal
				isModalOpen={showModal}
				handleLogout={handleLogout}
				closeLogoutModal={closeLogoutModal}
			/>
		</>
	);
};
