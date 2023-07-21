import { useState, useEffect } from "react";
import DeleteModal from "../Common Component/Modals/DeleteModal";
import EditModal from "../Common Component/Modals/EditModal";
import { Button, Tooltip, OverlayTrigger, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../../actions/todos/fetchTodos";
import { deleteTodo } from "../../actions/todos/deleteTodo";
import { updateTodo } from "../../actions/todos/updateTodo";
import TodosTable from "../Common Component/Table/TodosTable";

const TodoItems = () => {
	const dispatch = useDispatch();
	const todos = useSelector((state) => state.todos.todos);

	const [deleteTodoId, setDeleteTodoId] = useState("");
	const [isModalOpen, setIsModalOpen] = useState(false);

	const [editTodoId, setEditTodoId] = useState("");
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);

	const [editTodo, setEditTodo] = useState({});

	const username = "12345678";
	const password = "12345678";

	const openDeleteModal = (todoId) => {
		setDeleteTodoId(todoId);
		setIsModalOpen(true);
	};

	const closeDeleteModal = () => {
		setIsModalOpen(false);
	};

	const openEditModal = (todoId, todo) => {
		console.log(todo);
		console.log(todoId);

		setEditTodoId(todoId);
		setEditTodo(todo);
		setIsEditModalOpen(true);
	};

	const closeEditModal = () => {
		setIsEditModalOpen(false);
	};

	// const handleGetData = () => {
	// 	dispatch(fetchTodos(username, password));
	// };
	useEffect(() => {
		dispatch(fetchTodos(username, password));
	}, []);

	const handleDelete = () => {
		dispatch(deleteTodo(deleteTodoId, username, password));
		closeDeleteModal();
	};

	const handleEdit = (updatedTodo) => {
		dispatch(updateTodo(editTodoId, updatedTodo, username, password));
	};

	const renderTooltip = (todo) => (
		<Tooltip
			id={todo._id}
			className='custom-tooltip'
		>
			<div className='todo-details'>
				<h5>{todo.title}</h5>
				<p>{todo.description}</p>
				<p>
					<span className='todo-info'>Due Date: </span>
					<span className='todo-info-value'>{todo.dueDate.toString()}</span>
				</p>
				<p>
					<span className='todo-info'>Is Active: </span>
					<span className='todo-info-value'>{todo.isActive.toString()}</span>
				</p>
				<p>
					<span className='todo-info'>Status: </span>
					<span className='todo-info-value'>{todo.status}</span>
				</p>
			</div>
		</Tooltip>
	);
	return (
		<div className='todo-items'>
			<h1>Todos</h1>
			{/* <Table
				responsive
				hover
				className='custom-table'
			>
				<thead>
					<tr>
						<th>Title</th>
						<th>Description</th>
						<th>Due Date</th>
						<th>Is Active</th>
						<th>Status</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{todos.map((todo, index) => (
						<tr key={index}>
							<td>
								<OverlayTrigger
									placement='right'
									overlay={renderTooltip(todo)}
									popperConfig={{
										modifiers: {
											preventOverflow: {
												enabled: true,
												boundariesElement: "viewport",
											},
										},
									}}
								>
									<span>{todo.title}</span>
								</OverlayTrigger>
							</td>
							<td>{todo.description}</td>
							<td>{todo.dueDate.toString()}</td>
							<td>{todo.isActive.toString()}</td>
							<td>{todo.status}</td>
							<td>
								<Button
									variant='info'
									onClick={() => openEditModal(todo._id, todo)}
								>
									Edit
								</Button>
								<Button
									variant='danger'
									onClick={() => openDeleteModal(todo._id)}
								>
									Delete
								</Button>
							</td>
						</tr>
					))}
				</tbody>
			</Table> */}
			<TodosTable
				todos={todos}
				renderTooltip={renderTooltip}
				openEditModal={openEditModal}
				openDeleteModal={openDeleteModal}
			/>

			<DeleteModal
				isModalOpen={isModalOpen}
				closeDeleteModal={closeDeleteModal}
				handleDelete={handleDelete}
			/>
			<EditModal
				isEditModalOpen={isEditModalOpen}
				closeEditModal={closeEditModal}
				handleEdit={handleEdit}
				initialTodo={editTodo}
			/>
		</div>
	);
};

export default TodoItems;
