import { useDispatch } from "react-redux";
import { addTodo } from "../actions/todos/addTodo";
import { Form, Button, Dropdown } from "react-bootstrap";
import { useFormik } from "formik";
import todoSchema from "../validation/todoSchema";

const TodoTasks = ({ closeCreateModal }) => {
	const dispatch = useDispatch();

	const initialTodoState = {
		title: "",
		description: "",
		dueDate: "",
		isActive: true,
		status: "todo",
	};

	const formik = useFormik({
		initialValues: initialTodoState,
		validationSchema: todoSchema,
		onSubmit: (values, { resetForm }) => {
			console.log(values);
			dispatch(addTodo(values));
			resetForm();
		},
	});

	const handleCloseModal = () => {
		closeCreateModal();
	};

	return (
		<div className='todo-tasks'>
			<Form onSubmit={formik.handleSubmit}>
				<Form.Group controlId='title'>
					<Form.Label>Title</Form.Label>
					<Form.Control
						type='text'
						name='title'
						placeholder='Task Title'
						value={formik.values.title}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						isInvalid={formik.touched.title && formik.errors.title}
					/>
					{formik.touched.title && formik.errors.title && (
						<Form.Control.Feedback type='invalid'>
							{formik.errors.title}
						</Form.Control.Feedback>
					)}
				</Form.Group>

				<Form.Group controlId='description'>
					<Form.Label>Task Description</Form.Label>
					<Form.Control
						type='text'
						name='description'
						placeholder='Description'
						value={formik.values.description}
						onChange={formik.handleChange}
					/>
				</Form.Group>

				<Form.Group controlId='dueDate'>
					<Form.Label>Due Date</Form.Label>
					<Form.Control
						type='date'
						name='dueDate'
						value={formik.values.dueDate}
						onChange={formik.handleChange}
					/>
				</Form.Group>

				<Form.Group controlId='isActive'>
					<Form.Label>Is Active</Form.Label>
					<Dropdown>
						<Dropdown.Toggle
							variant='primary'
							id='dropdown-basic'
						>
							{formik.values.isActive ? "True" : "False"}
						</Dropdown.Toggle>
						<Dropdown.Menu>
							<Dropdown.Item
								onClick={() => formik.setFieldValue("isActive", true)}
							>
								True
							</Dropdown.Item>
							<Dropdown.Item
								onClick={() => formik.setFieldValue("isActive", false)}
							>
								False
							</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
					{/* <Form.Control
						as='select'
						name='isActive'
						value={formik.values.isActive}
						onChange={formik.handleChange}
					>
						<option value={true}>True</option>
						<option value={false}>False</option>
					</Form.Control> */}
				</Form.Group>

				<Form.Group controlId='status'>
					<Form.Label>Status</Form.Label>
					<Dropdown>
						<Dropdown.Toggle
							variant='primary'
							id='dropdown-basic'
						>
							{formik.values.status}
						</Dropdown.Toggle>
						<Dropdown.Menu>
							<Dropdown.Item
								onClick={() => formik.setFieldValue("status", "To Do")}
							>
								To Do
							</Dropdown.Item>
							<Dropdown.Item
								onClick={() => formik.setFieldValue("status", "Ongoing")}
							>
								Ongoing
							</Dropdown.Item>
							<Dropdown.Item
								onClick={() => formik.setFieldValue("status", "Completed")}
							>
								Completed
							</Dropdown.Item>
						</Dropdown.Menu>
					</Dropdown>
				</Form.Group>
				<div style={{ marginBottom: "10px" }}></div>

				{/* <Form.Control
						as='select'
						name='isActive'
						value={formik.values.isActive}
						onChange={formik.handleChange}
					>
						<option value={true}>True</option>
						<option value={false}>False</option>
					</Form.Control> */}

				{/* <Form.Group controlId='status'>
					<Form.Label>Status</Form.Label>
					<Form.Control
						as='select'
						name='status'
						value={formik.values.status}
						onChange={formik.handleChange}
					>
						<option value='todo'>To Do</option>
						<option value='ongoing'>Ongoing</option>
						<option value='completed'>Completed</option>
					</Form.Control>
				</Form.Group> */}

				<div className='task-action'>
					<Button
						className='task-action-button'
						type='submit'
					>
						Add Todo
					</Button>
					<Button
						className='task-action-button'
						onClick={handleCloseModal}
					>
						Close
					</Button>
				</div>
			</Form>
		</div>
	);
};

export default TodoTasks;
