import { object, string } from 'yup';

const contactSchema = object({
    firstName: string().required(), // required("First name is required") > custom error message
    lastName: string().required(),
    email: string().email(),
    message: string().required().max(200),
});

export default contactSchema;