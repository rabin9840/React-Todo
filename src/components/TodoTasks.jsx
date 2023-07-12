import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions/todos/addTodo";
import { useFormik } from "formik";
import todoSchema from "../validation/todoSchema";

const TodoTasks = ({ closeCreateModal }) => {
	const dispatch = useDispatch();
	// const todos = useSelector((state) => state.todos.todos);

	const initialTodoState = {
		title: "",
		description: "",
		dueDate: "",
		isActive: true,
		status: "todo",
	};
	// const formik = useFormik({
	// 	initialValues: initialTodoState,
	// 	validationSchema: todoSchema,
	// 	onSubmit: ({ resetForm }) => {
	// 		console.log(formik.values);
	// 		dispatch(addTodo(formik.values));
	// 		resetForm();
	// 	},
	// });

	const formik = useFormik({
		initialValues: initialTodoState,
		validationSchema: todoSchema,
		onSubmit: (values, { resetForm }) => {
			console.log(values);
			dispatch(addTodo(values));
			resetForm();
		},
	});

	// const [todoList, setTodoList]= useState([]);

	// const handleAddTask = () => {
	//     dispatch(addTodo(task));
	//     setTask(initialTodoState);
	// };

	// const handleInputChange = (e) => {
	// 	console.log(e.target);
	// 	console.log(e.target.name, e.target.value);
	// 	const { name, value } = e.target;
	// 	setTask((prevTask) => ({ ...prevTask, [name]: value }));
	// };

	const handleCloseModal = () => {
		closeCreateModal();
	};

	return (
		<div className='todo-tasks'>
			<form onSubmit={formik.handleSubmit}>
				<div className='task'>
					<h2>Title</h2>
					<input
						type='text'
						name='title'
						placeholder='Task Title'
						// value={task.title}
						value={formik.values.title}
						// onChange={handleInputChange}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
					/>
					{formik.touched.title && formik.errors.title && (
						<div className='error-message'>{formik.errors.title}</div>
					)}
				</div>
				<div className='task'>
					<h2>Task Description</h2>
					<input
						type='text'
						name='description'
						placeholder='Description'
						value={formik.values.description}
						onChange={formik.handleChange}
					/>
				</div>

				<div className='task'>
					<h2>Due Date</h2>
					<input
						type='date'
						name='dueDate'
						value={formik.values.dueDate}
						onChange={formik.handleChange}
					/>
				</div>

				<div className='task'>
					<h2>Is Active</h2>
					<select
						name='isActive'
						value={formik.values.isActive}
						onChange={formik.handleChange}
					>
						<option value={true}>True</option>
						<option value={false}>False</option>
					</select>
				</div>

				<div className='task'>
					<h2>Status</h2>
					<select
						name='status'
						value={formik.values.status}
						onChange={formik.handleChange}
					>
						<option value='todo'>To Do</option>
						<option value='ongoing'>Ongoing</option>
						<option value='completed'>Completed</option>
					</select>
				</div>

				<div className='task-action'>
					<button
						className='task-action-button'
						type='submit'
					>
						Add Todo
					</button>
					<button
						className='task-action-button'
						onClick={handleCloseModal}
					>
						Close
					</button>
				</div>
			</form>
		</div>
	);
};

export default TodoTasks;
