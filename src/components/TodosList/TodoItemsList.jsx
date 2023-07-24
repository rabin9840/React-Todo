import { useState, useEffect } from "react";
import DeleteModal from "../Common Component/Modals/DeleteModal";
import EditModal from "../Common Component/Modals/EditModal";
// import { Button, Tooltip, OverlayTrigger, Table } from "react-bootstrap";
import { Tooltip } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../../actions/todos/fetchTodos";
import { deleteTodo } from "../../actions/todos/deleteTodo";
import { updateTodo } from "../../actions/todos/updateTodo";
import TodosTable from "../Common Component/Table/TodosTable";
import ReactPaginate from "react-paginate";
import FilterComponent from "./FilterComponent/FilterComponent";
import Button from "react-bootstrap/Button"; // Import the Button component
import { BsFilter } from "react-icons/bs";

const TodoItems = () => {
	const dispatch = useDispatch();
	const todos = useSelector((state) => state.todos.todos);
	const pageCount = useSelector((state) => state.todos.pageCount);
	console.log(pageCount);
	console.log(todos);

	const [deleteTodoId, setDeleteTodoId] = useState("");
	const [isModalOpen, setIsModalOpen] = useState(false);

	const [editTodoId, setEditTodoId] = useState("");
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);

	const [editTodo, setEditTodo] = useState({});
	const [currentPage, setCurrentPage] = useState(1);
	const [todosPerPage, setTodosPerPage] = useState(10);
	const [statusFilter, setStatusFilter] = useState("All");

	const [showFilter, setShowFilter] = useState(false); // Add state to track filter visibility

	const toggleFilter = () => {
		setShowFilter((prevState) => !prevState);
	};

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

	const handlePerPageChange = (e) => {
		setTodosPerPage(parseInt(e.target.value));
		// Optional: Fetch todos again with the updated todosPerPage value
		// You may choose to update the todos immediately or wait for the user to apply filters.
		// dispatch(fetchTodos(username, password, currentPage, parseInt(e.target.value), statusFilter));
	};

	// useEffect(() => {
	// 	dispatch(fetchTodos(username, password));
	// }, []);

	// const handleFilterChange = () => {
	// 	// Fetch filtered data based on current filters and page
	// 	dispatch(
	// 		fetchTodos(username, password, currentPage, todosPerPage, statusFilter)
	// 	);
	// };

	const handleFilter = (filters) => {
		// console.log("clicked");
		// setStatusFilter(filters);
		// // Handle other filters as needed
		// console.log(statusFilter);
		console.log("clicked");
		console.log(filters);
		dispatch(fetchTodos(username, password, 1, todosPerPage, filters));
	};

	useEffect(() => {
		console.log(statusFilter);
		dispatch(
			fetchTodos(username, password, currentPage, todosPerPage, statusFilter)
		);
	}, [currentPage, todosPerPage, statusFilter, dispatch]);

	const handlePageClick = (e) => {
		setCurrentPage(e.selected + 1);
	};

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
			<div className='d-flex justify-content-start'>
				<label className='pe-2'>Result per page</label>
				{/* Step 3: Attach the event handler to update the state when the selection changes */}
				<select
					name='perPage'
					className='rounded-2 select-per-page'
					value={todosPerPage}
					onChange={handlePerPageChange}
				>
					<option value='5'>5</option>
					<option value='10'>10</option>
					<option value='50'>50</option>
					<option value='100'>100</option>
					<option value='500'>500</option>
				</select>
			</div>

			{/* Add a button to toggle the filter component visibility */}
			{/* <div className='d-flex justify-content-start'>
				<button onClick={toggleFilter}>
					{showFilter ? "Hide Filter" : "Show Filter"}
				</button>
			</div> */}
			{/* Show the filter button with the filter icon */}
			<div className='d-flex justify-content-start'>
				<Button
					variant='secondary'
					style={{ backgroundColor: "#1f576f", borderColor: "#1f576f" }}
					onClick={toggleFilter}
				>
					<BsFilter className='me-1' />
					{showFilter ? "Hide Filter" : "Show Filter"}
				</Button>
			</div>

			{/* Show FilterComponent based on the state */}
			{showFilter && <FilterComponent onFilter={handleFilter} />}

			{/* <FilterComponent onFilter={handleFilter} /> */}

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

			<ReactPaginate
				breakLabel='...'
				nextLabel='next >'
				onPageChange={handlePageClick}
				pageRangeDisplayed={5}
				pageCount={pageCount}
				previousLabel='< previous'
				renderOnZeroPageCount={null}
				marginPagesDisplayed={2}
				containerClassName='pagination justify-content-center'
				pageClassName='page-item'
				pageLinkClassName='page-link'
				previousClassName='page-item'
				previousLinkClassName='page-link'
				nextClassName='page-item'
				nextLinkClassName='page-link'
				activeClassName='active'
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
