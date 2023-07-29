import { Formik, Form, Field, ErrorMessage } from "formik";
import loginSchema from "../validation/loginSchema";

const LoginPage = () => {
	const initialLoginState = { email: "", password: "" };
	const handleSubmit = (values, { setSubmitting }) => {
		// Handle form submission here (e.g., call login API)
		console.log(values);
		setSubmitting(false);
	};

	return (
		<Formik
			// initialValues={{ email: "", password: "" }}
			initialValues={initialLoginState}
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
