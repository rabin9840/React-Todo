// import "./App.css";
// import { Route, Routes } from "react-router-dom";
// import TodoListPage from "./pages/TodoListPage";
// import DashboardPage from "./pages/DashboardPage";
// import { Nav, Navbar, Container } from "react-bootstrap";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// function App() {
// 	return (
// 		<div className='main-app-container'>
// 			<Navbar
// 				bg='dark'
// 				variant='dark'
// 				expand='lg'
// 				className='navbar'
// 			>
// 				<Container className='nav-container'>
// 					<Navbar.Brand href='/'>Todos</Navbar.Brand>
// 					<Navbar.Toggle aria-controls='navbar-nav' />
// 					<Navbar.Collapse id='navbar-nav'>
// 						<Nav className='flex-column'>
// 							<Nav.Link href='/'>Dashboard</Nav.Link>
// 							<Nav.Link href='/todos'>Todos</Nav.Link>
// 						</Nav>
// 					</Navbar.Collapse>
// 				</Container>
// 			</Navbar>
// 			<div className='content'>
// 				<Routes>
// 					<Route
// 						path='/'
// 						element={<DashboardPage />}
// 					/>
// 					<Route
// 						path='/todos'
// 						element={<TodoListPage />}
// 					/>
// 				</Routes>
// 			</div>
// 			<ToastContainer
// 				position='top-right'
// 				autoClose={3000}
// 				hideProgressBar
// 				newestOnTop={false}
// 				closeOnClick
// 				rtl={false}
// 				pauseOnFocusLoss
// 				draggable
// 				pauseOnHover
// 			/>
// 		</div>
// 	);
// }

// export default App;

import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import TodoListPage from "./pages/TodoListPage";
import DashboardPage from "./pages/DashboardPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import { Nav, Navbar, Container } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthenticatedComponent from "./components/Authenticated/AuthenticatedComponent";

function App() {
	return (
		<div>
			<div>
				<Routes>
					<Route
						path='/'
						element={<RegisterPage />}
					/>
					<Route
						path='/dashboard'
						element={<DashboardPage />}
					/>
					<Route
						path='/todos'
						element={<TodoListPage />}
					/>
					<Route
						path='/login'
						element={<LoginPage />}
					/>
					<Route
						path='/todo'
						element={<AuthenticatedComponent />}
					/>
				</Routes>
			</div>
			<ToastContainer
				position='top-right'
				autoClose={3000}
				hideProgressBar
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
			/>
		</div>
	);
}

export default App;
