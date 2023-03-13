import React from 'react'
import { useFormik } from 'formik';
import validations from './validations';
import './Contact.css';

export default function Contact() {

    const formik = useFormik({
        initialValues: {
          firstName: '',
          lastName: '',
          email: '',
          message: '',
        },
        onSubmit: async (values, bag) => {
          await new Promise((resolve) => setTimeout(resolve, 500)); //simulate server latency
          if(values.email === 'ataberk@gmail.com') {
            return bag.setErrors({ email: 'This email is already taken' }); //setErrors is a function from Formik bag
          } 
          bag.resetForm();
          console.log(values);
        },

        validationSchema: validations,
      });

  return (
    <div className="contact">
      <form onSubmit={formik.handleSubmit}>
        <div className='formEdit'>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input id="firstName" name="firstName" placeholder="Jane" onChange={formik.handleChange("firstName")} onBlur={formik.handleBlur("firstname")} value={formik.values.firstName} />
            {formik.errors.firstName && formik.touched.firstName && <div style={{ color: 'red', fontSize: '18px' }}>{formik.errors.firstName}</div>}
          </div>
          
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input id="lastName" name="lastName" placeholder="Doe" onChange={formik.handleChange("lastName")} onBlur={formik.handleBlur("lastName")} value={formik.values.lastName} />
            {formik.errors.lastName && formik.touched.lastName && <div style={{ color: 'red', fontSize: '18px' }}>{formik.errors.lastName}</div>}
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              placeholder="jane@acme.com"
              type="email"
              onChange={formik.handleChange("email")}
              onBlur={formik.handleBlur("email")}
              value={formik.values.email}
            />
            {formik.errors.email && formik.touched.email && <div style={{ color: 'red', fontSize: '18px' }}>{formik.errors.email}</div>}
          </div>

          <div>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder='Your message...' onChange={formik.handleChange("message")} onBlur={formik.handleBlur("message")} value={formik.values.message}></textarea>
            {formik.errors.message && formik.touched.message && <div style={{ color: 'red', fontSize: '18px' }}>{formik.errors.message}</div>}
          </div>

          <button type="submit" disabled={formik.isSubmitting}>Submit</button>
        </div>
      </form>
    </div>
  )
}
