import "./App.css";
import { Route, Routes } from "react-router-dom";
import TodoListPage from "./pages/TodoListPage";
import DashboardPage from "./pages/DashboardPage";
import { Nav, Navbar, Container } from "react-bootstrap";

function App() {
	return (
		<>
			<Navbar
				bg='dark'
				variant='dark'
				expand='lg'
			>
				<Container>
					<Navbar.Brand href='/'>Todos</Navbar.Brand>
					<Navbar.Toggle aria-controls='navbar-nav' />
					<Navbar.Collapse id='navbar-nav'>
						<Nav className='me-auto'>
							<Nav.Link href='/'>Dashboard</Nav.Link>
							<Nav.Link href='/todos'>Todos</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<Routes>
				<Route
					path='/'
					element={<DashboardPage />}
				/>
				<Route
					path='/todos'
					element={<TodoListPage />}
				/>
			</Routes>
		</>
	);
}

export default App;
