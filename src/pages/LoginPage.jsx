import { Formik, Form, Field, ErrorMessage } from "formik";
import loginSchema from "../validation/loginSchema";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const LoginPage = () => {
	const dispatch = useDispatch();
	const history = useNavigate();
	// const initialLoginState = { email: "", password: "" };
	const handleSubmit = async (values, { setSubmitting }) => {
		// Handle form submission here (e.g., call login API)
		try {
			console.log(values);
			const config = {
				headers: {
					"Content-Type": "application/json",
				},
				withCredentials: true,
			};
			// "http://localhost:3000/api/login",
			const login_response = await axios.post(
				"http://localhost:3000/api/login",
				// "/api/login",
				values,
				config
			);
			console.log(login_response);
			console.log(login_response.data.data.username);

			if (login_response && login_response.status === 200) {
				toast.success("Login successful", { autoClose: 3000 });
				dispatch({
					type: "SET_USERNAME",
					payload: login_response.data.data.username,
				});
				const isUserAuthenticated = true;
				localStorage.setItem("username", login_response.data.data.username);
				// localStorage.setItem(
				// 	"isAuthenticated",
				// 	JSON.stringify(isUserAuthenticated)
				// );
				localStorage.setItem("isAuthenticated", isUserAuthenticated);

				// history("/todo");
				history("/dashboard");
			}
		} catch (error) {
			console.log(error);
			console.log(error.response.data.message);
			toast.warning(error.response.data.message, { autoClose: 3000 });
		}
		setSubmitting(false);
	};

	return (
		<Formik
			initialValues={{ email: "", password: "" }}
			// initialValues={initialLoginState}
			validationSchema={loginSchema}
			onSubmit={handleSubmit}
		>
			{({ isSubmitting }) => (
				<Form>
					<div>
						<label htmlFor='email'>Email:</label>
						<Field
							type='email'
							id='email'
							name='email'
						/>
						<ErrorMessage
							name='email'
							component='div'
						/>
					</div>
					<div>
						<label htmlFor='password'>Password:</label>
						<Field
							type='password'
							id='password'
							name='password'
						/>
						<ErrorMessage
							name='password'
							component='div'
						/>
					</div>
					<button
						type='submit'
						disabled={isSubmitting}
					>
						Login
					</button>
				</Form>
			)}
		</Formik>
	);
};

export default LoginPage;
