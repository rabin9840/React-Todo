import TodoItemsList from "../components/TodosList/TodoItemsList";
import CreateTodos from "../components/Common Component/CreateTodos";
import CommonLayout from "../components/Layout/CommonLayout";
import LogoutButton from "../components/Common Component/LogoutButton";
const TodoListPage = () => {
	return (
		<>
			<CommonLayout>
				<div className='todo-list-container'>
					<CreateTodos />
					<LogoutButton />
					<TodoItemsList />
				</div>
			</CommonLayout>
		</>
	);
};

export default TodoListPage;
