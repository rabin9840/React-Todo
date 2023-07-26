import { useState } from "react";
import Button from "react-bootstrap/Button"; // Import the Button component
import { BsFilter } from "react-icons/bs";
import "./FilterComponent.css";

const FilterComponent = ({ onFilter }) => {
	const [statusFilter, setStatusFilter] = useState("All");
	const [dueDateFilter, setDueDateFilter] = useState("");
	const [isActiveFilter, setIsActiveFilter] = useState("");
	const [titleFilter, setTitleFilter] = useState("");
	const initialFilters = {
		status: "",
		dueDate: "",
		isActive: "",
		title: "",
	};

	const handleFilterClick = () => {
		console.log(dueDateFilter);
		const filters = {
			status: statusFilter,
			// dueDate: dueDateFilter
			// 	? moment(dueDateFilter, formats).format("YYYY-MM-DD")
			// 	: "",
			dueDate: dueDateFilter,
			isActive:
				isActiveFilter === "true"
					? true
					: isActiveFilter === "false"
					? false
					: "",
			title: titleFilter,
		};
		console.log(filters);
		onFilter(filters);
	};
	const handleResetClick = () => {
		setStatusFilter(initialFilters.status);
		setDueDateFilter(initialFilters.dueDate);
		setIsActiveFilter(initialFilters.isActive);
		setTitleFilter(initialFilters.title);
		onFilter(initialFilters); // Optionally, you can trigger the filter with the initial state to reset the filtered data.
	};

	return (
		<>
			<div className='filter-component'>
				<div className='filter-container'>
					<div className='filter-item'>
						<label>Status</label>
						<select
							value={statusFilter}
							onChange={(e) => setStatusFilter(e.target.value)}
						>
							{/* <option value='All'>All</option> */}
							<option value=''>Select Status</option>
							<option value='ongoing'>Ongoing</option>
							<option value='todo'>Todo</option>
							<option value='completed'>Completed</option>
						</select>
					</div>
					<div className='filter-item'>
						<label>Is Active</label>
						<select
							value={isActiveFilter}
							onChange={(e) => setIsActiveFilter(e.target.value)}
						>
							<option value=''>Select active</option>
							<option value='true'>True</option>
							<option value='false'>False</option>
						</select>
					</div>
					<div className='filter-item'>
						<label>Title</label>
						<input
							type='text'
							value={titleFilter}
							onChange={(e) => setTitleFilter(e.target.value)}
							placeholder='Enter title'
						/>
					</div>
					<div className='filter-item'>
						<label>Due Date</label>
						<input
							type='date'
							value={dueDateFilter}
							onChange={(e) => setDueDateFilter(e.target.value)}
						/>
					</div>
				</div>
				<div className='filter-item-button-container'>
					<div className='filter-item'>
						<Button
							variant='secondary'
							style={{ backgroundColor: "#1f576f", borderColor: "#1f576f" }}
							onClick={handleFilterClick}
						>
							<BsFilter className='me-1' />
							Filter Data
						</Button>
						{/* <button onClick={handleFilterClick}>Filter Data</button> */}
					</div>
					<div className='filter-item'>
						<Button
							variant='danger'
							style={{ backgroundColor: "#1f576f", borderColor: "#1f576f" }}
							onClick={handleResetClick}
						>
							<BsFilter className='me-1' />
							Reset Filters
						</Button>
					</div>
				</div>
			</div>
		</>
	);
};

export default FilterComponent;

// import { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import { BsFilter } from "react-icons/bs";

// const FilterComponent = ({ onFilter }) => {
// 	const [statusFilter, setStatusFilter] = useState("All");
// 	const [dueDateFilter, setDueDateFilter] = useState("");
// 	const [isActiveFilter, setIsActiveFilter] = useState("");
// 	const [titleFilter, setTitleFilter] = useState("");

// 	const handleFilterClick = () => {
// 		const filters = {
// 			status: statusFilter,
// 			dueDate: dueDateFilter,
// 			isActive:
// 				isActiveFilter === "true"
// 					? true
// 					: isActiveFilter === "false"
// 					? false
// 					: "",
// 			title: titleFilter,
// 		};
// 		onFilter(filters);
// 	};

// 	return (
// 		<div className='filter-component'>
// 			<Form>
// 				<Form.Group
// 					className='mb-3'
// 					controlId='statusFilter'
// 				>
// 					<Form.Label>Status</Form.Label>
// 					<Form.Control
// 						as='select'
// 						value={statusFilter}
// 						onChange={(e) => setStatusFilter(e.target.value)}
// 					>
// 						<option value='All'>All</option>
// 						<option value='ongoing'>Ongoing</option>
// 						<option value='todo'>Todo</option>
// 						<option value='completed'>Completed</option>
// 					</Form.Control>
// 				</Form.Group>

// 				<Form.Group
// 					className='mb-3'
// 					controlId='isActiveFilter'
// 				>
// 					<Form.Label>Is Active</Form.Label>
// 					<Form.Control
// 						as='select'
// 						value={isActiveFilter}
// 						onChange={(e) => setIsActiveFilter(e.target.value)}
// 					>
// 						<option value='true'>True</option>
// 						<option value='false'>False</option>
// 					</Form.Control>
// 				</Form.Group>

// 				<Form.Group
// 					className='mb-3'
// 					controlId='titleFilter'
// 				>
// 					<Form.Label>Title</Form.Label>
// 					<Form.Control
// 						type='text'
// 						value={titleFilter}
// 						onChange={(e) => setTitleFilter(e.target.value)}
// 					/>
// 				</Form.Group>

// 				<Form.Group
// 					className='mb-3'
// 					controlId='dueDateFilter'
// 				>
// 					<Form.Label>Due Date</Form.Label>
// 					<Form.Control
// 						type='date'
// 						value={dueDateFilter}
// 						onChange={(e) => setDueDateFilter(e.target.value)}
// 					/>
// 				</Form.Group>

// 				<Button
// 					variant='secondary'
// 					style={{ backgroundColor: "#1f576f", borderColor: "#1f576f" }}
// 					onClick={handleFilterClick}
// 				>
// 					<BsFilter className='me-1' />
// 					Filter Data
// 				</Button>
// 			</Form>
// 		</div>
// 	);
// };

// export default FilterComponent;
