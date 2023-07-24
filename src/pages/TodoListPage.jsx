import TodoItemsList from "../components/TodosList/TodoItemsList";
import CreateTodos from "../components/Common Component/CreateTodos";

const TodoListPage = () => {
	return (
		<>
			<div className='todo-list-container'>
				<CreateTodos />
				<TodoItemsList />
			</div>
		</>
	);
};

export default TodoListPage;
