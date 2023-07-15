import { Card } from "react-bootstrap";
import "./Dashboard.css";

const CountCard = ({ statusData }) => {
	console.log(statusData);
	return (
		// <>
		// 	<h1>this is card component</h1>
		// 	<h1>{statusData.status}</h1>
		// 	<h1>{statusData.count}</h1>
		// </>
		<Card className='todo-card-count'>
			<Card.Body>
				<Card.Title>{statusData.status}</Card.Title>
				<Card.Text>{statusData.count}</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default CountCard;
