import { Link } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";

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
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavComponent;
