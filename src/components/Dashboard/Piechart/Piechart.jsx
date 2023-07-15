import { Pie } from "react-chartjs-2";
import "chart.js/auto";
import "./Piechart.css";
const Piechart = ({ data }) => {
	return (
		<>
			<h1>Current Status</h1>
			<div className='pieChartContainer'>
				<Pie data={data}></Pie>
			</div>
		</>
	);
};

export default Piechart;
