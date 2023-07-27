import Piechart from "../Piechart/Piechart";
// import Test from "./Test";
// import Bardiagram from "../Bar Diagram/Bardiagram";

import BarChart from "../Bar Diagram/BarChart";
import axios from "axios";
import FirstTenTodos from "../FirstTenTodos";
import CountCard from "../CountCard";
import { useSelector } from "react-redux";
// import TopCard from "./TopCard";
import "./Dashboard.css";
import RecentTodos from "../RecentTodos";
import HashLoader from "react-spinners/HashLoader";

import { useEffect, useState } from "react";
const Dashboard = () => {
	const [todosStatusData, setTodosStatusData] = useState([]);
	const [totalTodosCount, setTotalTodosCount] = useState();
	const [ongoingStatusCount, setOngoingStatusCount] = useState();
	const [completedStatusCount, setCompletedStatusCount] = useState();
	const [todoStatusCount, setTodoStatusCount] = useState();
	const [loading, setLoading] = useState(true);

	// const [bardiagramStatusData, setBardiagramStatusData] = useState([]);

	// const [dates, setDates] = useState([]);
	// const [todoCounts, setTodoCounts] = useState([]);
	// const [ongoingCounts, setOngoingCounts] = useState([]);
	// const [completedCounts, setCompletedCounts] = useState([]);

	const username = "12345678";
	const password = "12345678";
	const todosData = useSelector((state) => state.todos.todos);
	console.log(todosData);

	useEffect(() => {
		console.log(loading);
		const getTodosStatusData = async () => {
			try {
				const response = await axios.get(
					"http://localhost:3000/todos/todosCount",
					{
						headers: {
							Authorization: `Basic ${btoa(`${username}:${password}`)}`,
						},
					}
				);
				console.log(response.data.data);
				const todosStatusData = response.data.data;
				console.log(todosStatusData);
				setTodosStatusData(todosStatusData);
				todosStatusData.map((todoStatus) => {
					if (todoStatus.status === "ongoing") {
						setOngoingStatusCount(todoStatus.count);
					} else if (todoStatus.status === "completed") {
						setCompletedStatusCount(todoStatus.count);
					} else {
						setTodoStatusCount(todoStatus.count);
					}
				});
				setTotalTodosCount(
					todosStatusData[0].count +
						todosStatusData[1].count +
						todosStatusData[2].count
				);

				setLoading(false);
				// setTimeout(() => {
				// 	setLoading(false);
				// }, 1000);
			} catch (error) {
				console.log(error);
				setLoading(false);
			}
		};

		// const getBarDiagramData = async () => {
		// 	try {
		// 		const response = await axios.get(
		// 			"http://localhost:3000/todos/barData?datePreset=last30days",
		// 			{
		// 				headers: {
		// 					Authorization: `Basic ${btoa(`${username}:${password}`)}`,
		// 				},
		// 			}
		// 		);
		// 		console.log(response.data.data);
		// 		const todosCountByMonth = response.data.data;
		// 		console.log(todosCountByMonth);
		// 		setBardiagramStatusData(todosCountByMonth);

		// 		const getStatusCount = (item, status) => {
		// 			const statusCount = item.statusCounts.find(
		// 				(entry) => entry.status === status
		// 			);
		// 			console.log(statusCount);
		// 			statusCount ? statusCount.count : 0;
		// 		};
		// 		todosCountByMonth.map((item) => {
		// 			// const labels = item.date;
		// 			// const todoCounts = getStatusCount(item, "todo");
		// 			// const ongoingCounts = getStatusCount(item, "ongoing");
		// 			// const completedCounts = getStatusCount(item, "completed");
		// 			dates.push(item.date);
		// 			// setDates((prev)=>...prev,item.date);
		// 			todoCounts.push(getStatusCount(item, "todo"));
		// 			setTodoCounts(todoCounts);
		// 			ongoingCounts.push(getStatusCount(item, "ongoing"));
		// 			setOngoingCounts(ongoingCounts);
		// 			completedCounts.push(getStatusCount(item, "completed"));
		// 			setCompletedCounts(completedCounts);
		// 		});

		// 		// const barChartData = {
		// 		// 	labels: dates,
		// 		// 	datasets: [
		// 		// 		{
		// 		// 			label: "Todo",
		// 		// 			backgroundColor: "rgba(54, 162, 235, 0.6)",
		// 		// 			data: todoCounts,
		// 		// 		},
		// 		// 		{
		// 		// 			label: "Ongoing",
		// 		// 			backgroundColor: "rgba(255, 99, 132, 0.6)",
		// 		// 			data: ongoingCounts,
		// 		// 		},
		// 		// 		{
		// 		// 			label: "Completed",
		// 		// 			backgroundColor: "rgba(75, 192, 192, 0.6)",
		// 		// 			data: completedCounts,
		// 		// 		},
		// 		// 	],
		// 		// // };
		// 		// console.log(barChartData);
		// 	} catch (error) {
		// 		console.log(error);
		// 	}
		// };
		// getBarDiagramData();

		getTodosStatusData();
	}, [todosData]);

	const pieChartData = {
		// labels: todosStatusData.map((todosStatus) => todosStatus._id),
		labels: todosStatusData.map((todosStatus) => todosStatus.status),
		datasets: [
			{
				data: todosStatusData.map((todosStatus) => todosStatus.count),
				backgroundColor: ["#36A2EB", "#FFCE56", "#FF6384"],
			},
		],
	};

	// const barChartData = {
	// 	labels: dates,
	// 	datasets: [
	// 		{
	// 			label: "Todo",
	// 			backgroundColor: "rgba(54, 162, 235, 0.6)",
	// 			data: todoCounts,
	// 		},
	// 		{
	// 			label: "Ongoing",
	// 			backgroundColor: "rgba(255, 99, 132, 0.6)",
	// 			data: ongoingCounts,
	// 		},
	// 		{
	// 			label: "Completed",
	// 			backgroundColor: "rgba(75, 192, 192, 0.6)",
	// 			data: completedCounts,
	// 		},
	// 	],
	// };

	// console.log(barChartData);
	if (loading) {
		return (
			<div className='loader-container'>
				<HashLoader
					color='#36d7b7'
					size={100}
					speedMultiplier={3}
				/>
				;
			</div>
		);
	} else {
		return (
			<div className='dashboard-container'>
				<h1>Dashboard</h1>
				<div className='top-card-container'>
					<div className='count-container'>
						<CountCard
							className='count-card'
							statusData={{ status: "Total", count: totalTodosCount }}
						></CountCard>
						<CountCard
							className='count-card'
							statusData={{ status: "Ongoing", count: ongoingStatusCount }}
						></CountCard>
						<CountCard
							className='count-card'
							statusData={{ status: "Todo", count: todoStatusCount }}
						></CountCard>
						<CountCard
							className='count-card'
							statusData={{ status: "Completed", count: completedStatusCount }}
						></CountCard>
					</div>
				</div>
				<div className='piechart-container'>
					<Piechart data={pieChartData} />
				</div>
				<div className='bardiagram-container'>
					<BarChart></BarChart>
					{/* <BarChart todosCountByMonth={bardiagramStatusData}></BarChart> */}
				</div>
				<FirstTenTodos />
				<RecentTodos />
			</div>
		);
	}
};

export default Dashboard;
