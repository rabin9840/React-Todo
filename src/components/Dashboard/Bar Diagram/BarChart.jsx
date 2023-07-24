import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Bar } from "react-chartjs-2";
import { Container, Row, Col, Form } from "react-bootstrap";
import "./BarChart.css";

const username = "12345678";
const password = "12345678";

const BarChart = () => {
	const [bardiagramStatusData, setBardiagramStatusData] = useState([]);
	const [selectedDatePreset, setSelectedDatePreset] = useState("last30days");
	const todosData = useSelector((state) => state.todos.todos);

	const getBarDiagramData = async (datePreset) => {
		try {
			const response = await axios.get(
				`http://localhost:3000/todos/barData?datePreset=${datePreset}`,
				{
					headers: {
						Authorization: `Basic ${btoa(`${username}:${password}`)}`,
					},
				}
			);

			const todosCountByMonth = response.data.data;
			setBardiagramStatusData(todosCountByMonth);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		// Fetch data for the selected date preset
		getBarDiagramData(selectedDatePreset);
	}, [selectedDatePreset, todosData]);

	const getTodoStatusCount = (item, status) => {
		const statusCount = item.statusCounts.find(
			(entry) => entry.status === status
		);
		return statusCount ? statusCount.count : 0;
	};

	// Initialize empty arrays to store the data for the Bar chart
	let dates = [];
	let todoCounts = [];
	let ongoingCounts = [];
	let completedCounts = [];

	bardiagramStatusData.forEach((item) => {
		dates.push(item.date);
		todoCounts.push(getTodoStatusCount(item, "todo"));
		ongoingCounts.push(getTodoStatusCount(item, "ongoing"));
		completedCounts.push(getTodoStatusCount(item, "completed"));
	});

	const barChartData = {
		labels: dates,
		datasets: [
			{
				label: "Todo",
				backgroundColor: "rgba(54, 162, 235, 0.6)",
				data: todoCounts,
			},
			{
				label: "Ongoing",
				backgroundColor: "rgba(255, 99, 132, 0.6)",
				data: ongoingCounts,
			},
			{
				label: "Completed",
				backgroundColor: "rgba(75, 192, 192, 0.6)",
				data: completedCounts,
			},
		],
	};

	// Calculate the min and max values for y-axis labels
	// const minCount = Math.min(
	// 	...todoCounts,
	// 	...ongoingCounts,
	// 	...completedCounts
	// );
	// const maxCount = Math.max(
	// 	...todoCounts,
	// 	...ongoingCounts,
	// 	...completedCounts
	// );

	// Y-axis scale options with suggestedMin and suggestedMax
	// const yAxesOptions = {
	// 	ticks: {
	// 		beginAtZero: true,
	// 		suggestedMin: Math.floor(minCount / 1), // Round down to nearest integer
	// 		suggestedMax: Math.ceil(maxCount / 1), // Round up to nearest integer
	// 		stepSize: 1, // Force step size to 1
	// 	},
	// };

	const yAxesOptions = {
		ticks: {
			beginAtZero: true,
			stepSize: 1,
		},
	};

	// Chart options including y-axis scale options
	const options = {
		scales: {
			y: yAxesOptions,
		},
	};

	return (
		// <>
		// 	<h1>Bar Chart</h1>
		// 	<div className='date-preset-container'>
		// 		<select
		// 			value={selectedDatePreset}
		// 			onChange={(e) => setSelectedDatePreset(e.target.value)}
		// 		>
		// 			<option value='last7days'>Last 7 Days</option>
		// 			<option value='last30days'>Last 30 Days</option>
		// 			{/* Add other date presets as needed */}
		// 		</select>
		// 	</div>
		// 	<div className='barchart-container'>
		// 		<Bar
		// 			data={barChartData}
		// 			options={options}
		// 		/>
		// 	</div>
		// </>
		<Container className='my-5'>
			<Row className='justify-content-center'>
				<Col
					xs={12}
					md={8}
				>
					<h1 className='text-center mb-4'>Bar Chart</h1>
					<div className='date-preset-container text-center'>
						<Form.Select
							value={selectedDatePreset}
							onChange={(e) => setSelectedDatePreset(e.target.value)}
						>
							<option value='last7days'>Last 7 Days</option>
							<option value='last30days'>Last 30 Days</option>
							<option value='default'>Today</option>
							<option value='thismonth'>This Month</option>
							<option value='lastmonth'>LastMonth</option>
							<option value='lastweek'>Last Week</option>

							{/* Add other date presets as needed */}
						</Form.Select>
					</div>
					<div className='barchart-container mt-4'>
						<Bar
							data={barChartData}
							options={options}
						/>
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default BarChart;
