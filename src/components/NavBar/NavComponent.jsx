import { Link } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";
import LogoutButton from "../Common Component/LogoutButton";
import "../../App.css";

const NavComponent = () => {
	return (
		<Navbar
			bg='dark'
			variant='dark'
			expand='lg'
			className='navbar'
		>
			<Container className='nav-container'>
				<Link
					to='/'
					className='navbar-brand'
				>
					Todos
				</Link>
				<Navbar.Toggle aria-controls='navbar-nav' />
				<Navbar.Collapse id='navbar-nav'>
					<Nav className='flex-column'>
						{/* Use the Link component instead of anchor tag */}
						<Link
							to='/dashboard'
							className='nav-link'
						>
							Dashboard
						</Link>
						{/* Use the Link component instead of anchor tag */}
						<Link
							to='/todos'
							className='nav-link'
						>
							Todos
						</Link>
						<Link
							to='/todo'
							className='nav-link'
						>
							Authenticated Todos
						</Link>
						<LogoutButton className='custom-logout-button' />
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavComponent;
