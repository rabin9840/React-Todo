import { Formik, Form, Field, ErrorMessage } from "formik";
import registrationSchema from "../validation/registrationSchema";
import axios from "axios";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const RegisterPage = () => {
	const initialRegistrationState = {
		username: "",
		email: "",
		password: "",
	};

	const handleSubmit = async (values, { setSubmitting }) => {
		try {
			// Here, you can handle form submission logic, e.g., send data to the backend
			console.log(values);
			const response = await axios.post(
				"http://localhost:3000/api/signup",
				values
			);
			console.log(response);
			if (response && response.status === 201) {
				toast.success("Registration successful", { autoClose: 3000 });
			}
		} catch (error) {
			console.log(error);
			console.log(error.response.data.message);
			toast.warning(error.response.data.message, { autoClose: 3000 });

			// toast.warning("error.errors[0].msg", { autoClose: 3000 });

			// setIsTodoCreated(false);
			// Optionally, you can show an error message to the user
		}

		setSubmitting(false);
	};
	return (
		<Formik
			initialValues={initialRegistrationState}
			validationSchema={registrationSchema}
			onSubmit={handleSubmit}
		>
			{({ isSubmitting }) => (
				<Form>
					<div>
						<label htmlFor='username'>Username:</label>
						<Field
							type='text'
							id='username'
							name='username'
						/>
						<ErrorMessage
							name='username'
							component='div'
						/>
					</div>
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
						Register
					</button>
					<h1>If already registered click login below for redirecting</h1>
					<Link
						to='/login'
						className='nav-link'
					>
						Login
					</Link>
				</Form>
			)}
		</Formik>
	);
};
export default RegisterPage;
