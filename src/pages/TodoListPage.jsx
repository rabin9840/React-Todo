import TodoItemsList from "../components/TodosList/TodoItemsList";
import CreateTodos from "../components/Common Component/CreateTodos";
import CommonLayout from "../components/Layout/CommonLayout";

const TodoListPage = () => {
	return (
		<>
			<CommonLayout>
				<div className='todo-list-container'>
					<CreateTodos />
					<TodoItemsList />
				</div>
			</CommonLayout>
		</>
	);
};

export default TodoListPage;
