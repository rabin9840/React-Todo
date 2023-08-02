import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CommonLayout from "../Layout/CommonLayout";
const AuthenticatedComponent = () => {
	const [todos, setTodos] = useState([]);

	const [username, setUsername] = useState("");
	// const baseUrl = import.meta.env.VITE_REACT_APP_BASE_URL;
	const reduxUsername = useSelector((state) => state.username);
	console.log(reduxUsername.username);
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
		if (reduxUsername.username) {
			console.log("redux username" + reduxUsername.username);
			setUsername(reduxUsername.username);
		} else {
			setUsername(localStorage.getItem("username"));
		}
		fetchData();
	}, []);

	return (
		<>
			<CommonLayout>
				<h1>Hello</h1>
				<h1>User:{username}</h1>
				<ul>
					{todos.map((todo, index) => (
						<li key={index}>{todo}</li>
					))}
				</ul>
			</CommonLayout>
		</>
	);
};

export default AuthenticatedComponent;
