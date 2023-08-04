import { useEffect, useState } from "react";
import getGreetingMessage from "../utils/getGreetingMessage";
import "../App.css";
const GreetingComponent = ({ username }) => {
	const [greetinMessage, setGreetingMessage] = useState("");
	useEffect(() => {
		const currentDate = new Date();
		const currentGreeting = getGreetingMessage(currentDate);
		setGreetingMessage(currentGreeting);
	}, []);

	return (
		<>
			<h1 className='app-heading'>
				{greetinMessage}: {username}
			</h1>
		</>
	);
};

export default GreetingComponent;
