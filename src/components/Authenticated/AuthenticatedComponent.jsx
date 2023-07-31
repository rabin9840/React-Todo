import axios from "axios";

import { useEffect } from "react";

const AuthenticatedComponent = () => {
	useEffect(() => {
		const fetchData = async () => {
			try {
				const auth_response = await axios.get(
					"/api/todo",
					// "/todo",
					{ withCredentials: true }
				);
				console.log(auth_response);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, []);

	return (
		<>
			<h1>Helow</h1>
		</>
	);
};

export default AuthenticatedComponent;
