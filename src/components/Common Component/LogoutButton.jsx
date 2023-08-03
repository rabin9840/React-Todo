import { useState } from "react";
import { Button } from "react-bootstrap";
import LogoutModal from "./Modals/LogoutModal";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
	const [showModal, setShowModal] = useState(false);
	const history = useNavigate();

	const handleLogout = async () => {
		const logout_response = await axios.get(
			import.meta.env.VITE_REACT_APP_BASE_URL + "/api/logout",
			{
				withCredentials: true,
			}
		);
		console.log(logout_response);
		if (logout_response.status === 200) {
			toast.success("Logout Successful", { autoClose: 3000 });
			localStorage.removeItem("username");
			localStorage.removeItem("isAuthenticated");
			history("/login");
		}
		closeLogoutModal();
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

export default LogoutButton;
