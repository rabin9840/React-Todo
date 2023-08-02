import { Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../../utils/auth";
const ProtectedRoute = ({ path, element }) => {
	if (isAuthenticated()) {
		// User is authenticated, render the component
		return (
			<Route
				path={path}
				element={element}
			/>
		);
	} else {
		// User is not authenticated, redirect to the login page
		return <Navigate to='/login' />;
	}
};

export default ProtectedRoute;
