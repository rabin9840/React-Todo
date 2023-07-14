import Piechart from "./Piechart";
// import Test from "./Test";
import axios from "axios";
import FirstTenTodos from "../TodosList/FirstTenTodos";

import { useEffect, useState } from "react";
const Dashboard = () => {
	const [todosStatusData, setTodosStatusData] = useState([]);
	const username = "12345678";
	const password = "12345678";

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
			} catch (error) {
				console.log(error);
			}
		};
		getTodosStatusData();
	}, []);

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
			<FirstTenTodos />
			<Piechart data={pieChartData} />
		</>
	);
};

export default Dashboard;
