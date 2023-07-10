import React from 'react'
import {Formik , Form , Field , ErrorMessage} from 'formik'
import * as yup from 'yup'

// const passwordRules = /^(?=.*[A-Za-z])(?=.*)(?=.*[@$!%*#?&])[A-Za-z@$!%*#?&]{8,}$/;

const Registration = () => {
    const initialValue = {
        name : '',
        email : '',
        password :'',
        phoneNo : '',
        termsandcond : false   
    } 


    const validationSchema = yup.object().shape({
        name : yup.string().required('Required'),
        email : yup.string().email('please enter valid email').required('Required'),
        password : yup.string().min(5).matches(
            /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
            "Password must contain at least 8 characters, one uppercase, one number and one special case character"
          ).required('Required'),
        phoneNo : yup.string().required('enter 10 digit phone number'),
        termsandcond : yup.boolean().oneOf([true], 'Please accept terms and conditions')
    })

    const handleSubmit = (values)=>{
        console.log("values" , values);
    }
  return (
    <>
        <div className='container'>
            <h1>Formik Validation Form</h1>
            <div className=''>
                <Formik initialValues={initialValue}
                 validationSchema={validationSchema}
                 onSubmit={handleSubmit}
                >
                    <Form>
                        <div className='errorblock'>
                            <label htmlFor='name'>Name : </label> <br/>
                            <Field type='text' name='name' placeholder='enter name' className='box-width'></Field>
                            <p className='danger'>
                                <ErrorMessage name='name'/>
                            </p>
                        </div>
                        <div className='errorblock'>
                            <label htmlFor='email'>Email : </label> <br/>
                            <Field type='email' name='email' placeholder='enter email' className='box-width'></Field>
                            <p className='danger'>
                                <ErrorMessage name='email'/>
                            </p>
                        </div>
                        <div>
                            <label htmlFor='password'>Password : </label> <br/>
                            <Field type='password' name='password' placeholder='enter password' className='box-width'></Field>
                            <p className='danger'>
                                <ErrorMessage name='password'/>
                            </p>
                        </div>
                        <div>
                            <label htmlFor='phoneNo'>Phone Number : </label> <br/>
                            <Field type='number' name='phoneNo' placeholder='enter number' className='box-width'></Field> 
                            <p className='danger'>
                                <ErrorMessage name='phoneNo'/>
                            </p>
                        </div>
                        <div>
                            <label>
                                <Field type='checkbox' name='termsandcond'></Field>
                                I accept terms and conditions
                            </label>
                            <p className='danger'>
                                <ErrorMessage name='termsandcond'/>
                            </p>
                        </div>

                        <button className='btn-submit' type='submit'>Submit</button>
                    </Form>
                </Formik>
            </div>

        </div>
    </>
  )
}

export default Registration
