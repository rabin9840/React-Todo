import * as Yup from 'yup';

const todoSchema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
})

export default todoSchema;