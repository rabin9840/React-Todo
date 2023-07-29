import * as Yup from 'yup';

const registrationSchema = Yup.object().shape({
    username: Yup.string()
        .required('Username is required'),
    email: Yup.string()
        .email('Invalid Email address').required('Email is required'),
    password: Yup.string()
        .min(8, "Password length >= 8")
        .required("Password is required")
})

export default registrationSchema;