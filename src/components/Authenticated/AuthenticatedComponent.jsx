import axios from "axios";
import { useEffect, useState } from "react";

const AuthenticatedComponent = () => {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const auth_response = await axios.get("/api/todo", {
					withCredentials: true,
				});
				console.log(auth_response);
				setTodos(auth_response.data.todos);
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, []);

	return (
		<>
			<h1>Hello</h1>
			<ul>
				{todos.map((todo, index) => (
					<li key={index}>{todo}</li>
				))}
			</ul>
		</>
	);
};

export default AuthenticatedComponent;
