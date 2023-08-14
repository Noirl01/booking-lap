import { useState } from 'react';

import * as Yup from 'yup';
import { Formik, Form } from 'formik';

import Success from './Success/Success';
import TextField from './TextField';

import './Signup.css'

const Signup = () => {


// States for checking the errors
  const [submitted, setSubmitted] = useState(false);

  //Showing success message
  const successMessage = () => {
    return (
        submitted?
        <div className='z-10 backdrop-blur-lg w-screen h-[120vh] -mt-[120vh] absolute '>
        <Success/>
        </div>
        : null
  )}

      const validate = Yup.object({
        name: Yup.string()
        .max(15, "Please enter 15 characters or less.")
        .required("Name is Required."),
        email: Yup.string()
        .email("Email is invalid.")
        .required("Email is required."),
        password: Yup.string()
        .min(8, "Password must be at least 8 characters.")
        .required("Password is required."),
        confirmpassword: Yup.string()
        .oneOf([Yup.ref('password'),null] , "Password must match.")
        .required("Password must match.")
      })

  return (
    
    <>
    <div className='text-black flex flex-col text-left w-11/12 ml-[1em] rounded-[1.7rem] Gradient-Bg mt-10 mb-10'>
      <h1 className='text-5xl font-bold ml-[7.5vw]'><span className='ml-[1.5em]'>Please</span> <br/> Signup below</h1>
      <div className="form mt-5 ml-5">

      {/* <form className='mt-5 w-9/12 text-2xl font-bold justify-items-center ml-[2.5rem]' onSubmit={handleSubmit}>*/}
    <Formik
      initialValues={{
        name: '',
        email: '',
        password:'',
        confirmpassword:'',
      }}
      validationSchema={validate}

      onSubmit={async (values) => {
        setSubmitted(true);
        await new Promise((r) => setTimeout(r, 500));
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form className='font-bold text-[1.2em]'>   
         <TextField label="Name" className="mt-5 mb-5" placeholder="Ex: John Doe" name="name" type="text"/>
         <TextField label="Email" className="mt-5  mb-5" placeholder="Ex: JohnDoe@dev.com" name="email" type="email"/>
         <TextField label="Password" className="mt-5  mb-5" placeholder="Enter your password" name="password" type="password"/>
         <TextField label="Confirm password" className="mt-5  mb-5" placeholder="Confirm your password" name="confirmpassword" type="password"/>
          <button 
          className="BoxShadow mt-9 -ml-2 h-[3.5em] w-6/12 rounded-full InitialBg BoxShadow"  
          type="submit">
          Register
          </button>
          <button 
          className="BoxShadow mt-9 ml-2 h-[3.5em] w-6/12 rounded-full bg-red-800 text-white"  
          type="reset">
          Reset
          </button>
          </Form>
    </Formik>
    </div>
  </div>
    <div className="messages text-green-600 text-2xl font-bold">
          {successMessage()}
    </div>
  </>
  )
}

export default Signup