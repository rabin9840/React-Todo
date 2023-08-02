import NavComponent from "../NavBar/NavComponent";
import { Container } from "react-bootstrap";
import "../../App.css";

const Layout = ({ children }) => {
	return (
		<div className='main-app-container'>
			<NavComponent />
			<div className='content'>
				<Container>{children}</Container>
			</div>
		</div>
	);
};

export default Layout;
