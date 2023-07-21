import { Table, OverlayTrigger, Tooltip } from "react-bootstrap";
import "./TodosTable.css";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import styled from "styled-components";

const IconWrapper = styled.span`
	display: inline-block;
	cursor: pointer;
	margin-right: 10px;
	transition: transform 0.2s ease-in-out;

	&:hover {
		transform: scale(1.2);
	}
`;

const TodosTable = ({
	todos,
	renderTooltip,
	openEditModal,
	openDeleteModal,
}) => {
	const renderEditTooltip = (props) => (
		<Tooltip
			id='edit-tooltip'
			{...props}
		>
			Edit
		</Tooltip>
	);

	const renderDeleteTooltip = (props) => (
		<Tooltip
			id='delete-tooltip'
			{...props}
		>
			Delete
		</Tooltip>
	);

	return (
		<div className='custom-table-container'>
			{/* Apply the border-radius to this div */}
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
								{/* Edit Icon */}
								<OverlayTrigger
									placement='top'
									overlay={renderEditTooltip}
								>
									<IconWrapper onClick={() => openEditModal(todo._id, todo)}>
										<AiOutlineEdit
											size={24}
											color='#007bff'
										/>
									</IconWrapper>
								</OverlayTrigger>

								{/* Delete Icon */}
								<OverlayTrigger
									placement='top'
									overlay={renderDeleteTooltip}
								>
									<IconWrapper onClick={() => openDeleteModal(todo._id)}>
										<AiOutlineDelete
											size={24}
											color='#dc3545'
										/>
									</IconWrapper>
								</OverlayTrigger>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</div>
	);
};

export default TodosTable;
