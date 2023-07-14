import Piechart from "./Piechart";
// import Test from "./Test";
import { useState } from "react";

import React, { useEffect } from "react";
const Dashboard = () => {
	const [todosStatusData, setTodosStatusData] = useState([]);
	const username = "12345678";
	const password = "12345678";
	const pieChartData = {
		labels: ["Completed", "In Progress", "To Do"],
		datasets: [
			{
				data: [30, 50, 20],
				backgroundColor: ["#36A2EB", "#FFCE56", "#FF6384"],
			},
		],
	};
	return (
		<>
			<h1>Dashboard</h1>
			{/* <PieChart data={pieChartData} /> */}
			{/* <PieChart /> */}
			{/* <Test data={pieChartData} /> */}
			<Piechart data={pieChartData} />
		</>
	);
};

export default Dashboard;
