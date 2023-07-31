import { Formik, Form, Field, ErrorMessage } from "formik";
import loginSchema from "../validation/loginSchema";
import axios from "axios";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

const LoginPage = () => {
	const history = useHistory();

	// const initialLoginState = { email: "", password: "" };
	const handleSubmit = async (values, { setSubmitting }) => {
		// Handle form submission here (e.g., call login API)
		try {
			console.log(values);
			const login_response = await axios.post(
				"http://localhost:3000/api/login",
				values
			);
			console.log(login_response);
			if (login_response && login_response.status === 200) {
				toast.success("Login successful", { autoClose: 3000 });
			}
			history.push("/todos");
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
