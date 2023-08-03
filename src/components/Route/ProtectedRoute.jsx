// // // Your ProtectedRoute component
// // import { Route, Navigate } from "react-router-dom";
// // import isAuthenticated from "../../utils/auth";

// // const ProtectedRoute = ({ component: Component, ...rest }) => {
// // 	const WrappedComponent = (props) => {
// // 		// Check if the user is authenticated
// // 		const isUserAuthenticated = isAuthenticated();

// // 		if (isUserAuthenticated) {
// // 			// User is authenticated, render the component
// // 			return <Component {...props} />;
// // 		} else {
// // 			// User is not authenticated, redirect to the login page
// // 			return <Navigate to='/login' />;
// // 		}
// // 	};

// // 	// Set the display name for the wrapped component
// // 	const componentName = Component.displayName || Component.name || "Component";
// // 	WrappedComponent.displayName = `Protected(${componentName})`;

// // 	return (
// // 		<Route
// // 			{...rest}
// // 			element={<WrappedComponent />}
// // 		/>
// // 	);
// // };

// // export default ProtectedRoute;
// // Your ProtectedRoute component
// import { Route, Navigate } from "react-router-dom";
// // import isAuthenticated from "../../utils/auth";

// const ProtectedRoute = ({ element: Component, ...rest }) => {
// 	// Check if the user is authenticated
// 	// const isUserAuthenticated = JSON.parse(
// 	// 	localStorage.getItem("isAuthenticated")
// 	// );

// 	const isUserAuthenticated = localStorage.getItem("isAuthenticated");

// 	console.log("for protected route" + isUserAuthenticated);

// 	if (isUserAuthenticated) {
// 		// User is authenticated, render the component
// 		return (
// 			<Route
// 				{...rest}
// 				element={<Component />}
// 			/>
// 		);
// 	} else {
// 		// User is not authenticated, redirect to the login page
// 		return <Navigate to='/login' />;
// 	}
// };

// export default ProtectedRoute;
// ProtectedRoute.js
// ProtectedRoute.js
import { Route, Navigate } from "react-router-dom";

const ProtectedRoute = ({ element: Component, ...rest }) => {
	// Check if the user is authenticated
	const isUserAuthenticated = localStorage.getItem("isAuthenticated");

	if (isUserAuthenticated) {
		// User is authenticated, render the component
		return <Component {...rest} />;
	} else {
		// User is not authenticated, redirect to the login page
		return <Navigate to='/login' />;
	}
};

export default ProtectedRoute;
