import { Pie } from "react-chartjs-2";
import "chart.js/auto";
const Piechart = ({ data }) => {
	return (
		<>
			<h1>this is piechart</h1>
			<Pie data={data}></Pie>
		</>
	);
};

export default Piechart;
