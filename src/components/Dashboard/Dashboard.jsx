import Piechart from "./Piechart/Piechart";
// import Test from "./Test";
import axios from "axios";
import FirstTenTodos from "../TodosList/FirstTenTodos";
import CountCard from "./CountCard";
import { useSelector } from "react-redux";
// import TopCard from "./TopCard";
import "./Dashboard.css";
import RecentTodos from "../TodosList/RecentTodos";

import { useEffect, useState } from "react";
const Dashboard = () => {
	const [todosStatusData, setTodosStatusData] = useState([]);
	const [totalTodosCount, setTotalTodosCount] = useState();
	const [ongoingStatusCount, setOngoingStatusCount] = useState();
	const [completedStatusCount, setCompletedStatusCount] = useState();
	const [todoStatusCount, setTodoStatusCount] = useState();
	// const [todosStatusCountData, setTodosStatusCountData] = useState({
	// 	ongoingStatusCount: "",
	// 	completedStatusCount: "",
	// 	todoStatusCount: "",
	// 	totalTodosCount: "",
	// });
	const username = "12345678";
	const password = "12345678";
	const todosData = useSelector((state) => state.todos.todos);

	useEffect(() => {
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
				setTodosStatusData(todosStatusData);
				// setTodosStatusCountData(() => {

				// })
				todosStatusData.map((todoStatus) => {
					if (todoStatus._id === "ongoing") {
						setOngoingStatusCount(todoStatus.count);
					} else if (todoStatus._id === "completed") {
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
			} catch (error) {
				console.log(error);
			}
		};

		getTodosStatusData();
	}, [todosData]);

	// const totalTodosCount = () => {
	// 	const ongoingStatusCount = todosStatusData[0].count;
	// 	const completedStatusCount = todosStatusData[1].count;
	// 	const todoStatusCount = todosStatusData[2].count;
	// 	const totalTodos =
	// 		ongoingStatusCount + completedStatusCount + todoStatusCount;
	// 	return totalTodos;
	// };

	const pieChartData = {
		labels: todosStatusData.map((todosStatus) => todosStatus._id),
		datasets: [
			{
				data: todosStatusData.map((todosStatus) => todosStatus.count),
				backgroundColor: ["#36A2EB", "#FFCE56", "#FF6384"],
			},
		],
	};

	return (
		<>
			<h1>Dashboard</h1>
			{/* <h2>{todosStatusData[0]._id}</h2> */}
			{/* <TestComponent data={todosStatusData} /> */}
			<div className='top-card-container'>
				<div className='count-container'>
					<CountCard
						statusData={{ status: "Total", count: totalTodosCount }}
					></CountCard>
					<CountCard
						statusData={{ status: "Ongoing", count: ongoingStatusCount }}
					></CountCard>
					<CountCard
						statusData={{ status: "Todo", count: todoStatusCount }}
					></CountCard>
					<CountCard
						statusData={{ status: "Completed", count: completedStatusCount }}
					></CountCard>
				</div>

				<div className='piechart-container'>
					<Piechart data={pieChartData} />
				</div>
			</div>
			{/* <TopCard
				statusDetail={
					(totalTodosCount,
					ongoingStatusCount,
					completedStatusCount,
					todoStatusCount)
				}
			/> */}
			<FirstTenTodos />
			{/* <Piechart data={pieChartData} /> */}
			<RecentTodos />
		</>
	);
};

export default Dashboard;
