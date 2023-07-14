import CreateTodos from "../components/TodosList/CreateTodos";
import TodoItemsList from "../components/TodoItemsList";

const TodoListPage = () => {
	return (
		<>
			<CreateTodos />
			<TodoItemsList />
		</>
	);
};

export default TodoListPage;
