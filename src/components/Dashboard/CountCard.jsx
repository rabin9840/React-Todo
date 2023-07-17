import { Card } from "react-bootstrap";
import "./Dashboardmain/Dashboard.css";

const CountCard = ({ statusData }) => {
	console.log(statusData);
	return (
		<Card className='todo-card-count'>
			<Card.Body>
				<Card.Title>{statusData.status}</Card.Title>
				<Card.Text>{statusData.count}</Card.Text>
			</Card.Body>
		</Card>
	);
};

export default CountCard;
