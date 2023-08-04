import TodoItemsList from "../components/TodosList/TodoItemsList";
import CreateTodos from "../components/Common Component/CreateTodos";
import CommonLayout from "../components/Layout/CommonLayout";
// import { useEffect } from "react";
import { useSelector } from "react-redux";
import ProfileComponent from "../components/Common Component/Profile Component/ProfileComponent";
import getUserName from "../utils/getUsername";
import GreetingComponent from "../components/GreetingComponent";

const TodoListPage = () => {
	// const [username, setUsername] = useState("");
	// const baseUrl = import.meta.env.VITE_REACT_APP_BASE_URL;
	const reduxUsername = useSelector((state) => state.username);
	// console.log(reduxUsername.username);
	// console.log(username);
	const username = getUserName(reduxUsername);
	console.log("function username" + username);
	// useEffect(() => {
	// 	if (reduxUsername.username) {
	// 		console.log("redux username" + reduxUsername.username);
	// 		setUsername(reduxUsername.username);
	// 	} else {
	// 		setUsername(localStorage.getItem("username"));
	// 	}
	// }, []);
	return (
		<>
			<CommonLayout>
				<div className='todo-list-container'>
					<ProfileComponent username={username} />
					<GreetingComponent username={username} />
					<CreateTodos />
					<TodoItemsList />
				</div>
			</CommonLayout>
		</>
	);
};

export default TodoListPage;
