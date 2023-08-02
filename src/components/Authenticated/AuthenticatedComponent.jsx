import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const AuthenticatedComponent = () => {
	const [todos, setTodos] = useState([]);
	// const baseUrl = import.meta.env.VITE_REACT_APP_BASE_URL;
	const username = useSelector((state) => state.username);
	console.log(username);

	useEffect(() => {
		const fetchData = async () => {
			try {
				// const auth_response = await axios.get("/api/todo", {
				// 	withCredentials: true,
				// });
				const auth_response = await axios.get(
					import.meta.env.VITE_REACT_APP_BASE_URL + "/api/todo",
					{
						withCredentials: true,
					}
				);
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
			<h1>User:{username}</h1>
			<ul>
				{todos.map((todo, index) => (
					<li key={index}>{todo}</li>
				))}
			</ul>
		</>
	);
};

export default AuthenticatedComponent;
