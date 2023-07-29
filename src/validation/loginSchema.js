import * as Yup from 'yup';

const loginSchema = Yup.object().shape({
    email: Yup.string()
        .email('Invalid Email address').required('Email is required'),
    password: Yup.string()
        .min(8, "Password length >= 8")
        .required("Password is required")
})

export default loginSchema;