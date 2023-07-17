import { Table, OverlayTrigger, Button } from "react-bootstrap";
const TodosTable = ({
	todos,
	renderTooltip,
	openEditModal,
	openDeleteModal,
}) => {
	return (
		<Table
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
		</Table>
	);
};
export default TodosTable;
