import TodoItemsList from "../components/TodosList/TodoItemsList";
import CreateTodos from "../components/Common Component/CreateTodos";
import CommonLayout from "../components/Layout/CommonLayout";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProfileComponent from "../components/Common Component/Profile Component/ProfileComponent";

const TodoListPage = () => {
	const [username, setUsername] = useState("");
	// const baseUrl = import.meta.env.VITE_REACT_APP_BASE_URL;
	const reduxUsername = useSelector((state) => state.username);
	console.log(reduxUsername.username);
	console.log(username);
	useEffect(() => {
		if (reduxUsername.username) {
			console.log("redux username" + reduxUsername.username);
			setUsername(reduxUsername.username);
		} else {
			setUsername(localStorage.getItem("username"));
		}
	}, []);
	return (
		<>
			<CommonLayout>
				<div className='todo-list-container'>
					<ProfileComponent username={username} />
					<CreateTodos />
					<TodoItemsList />
				</div>
			</CommonLayout>
		</>
	);
};

export default TodoListPage;
