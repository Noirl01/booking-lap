import { useEffect, useState } from 'react';
import sanitizeHtml from 'sanitize-html';

import './Signup.css'
import Success from './Success/Success';
const Signup = () => {

// States for registration
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

// States for checking the errors
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

// Handling the name change
  const handleName = (e) => {
    let sanitizedNameValue = sanitizeHtml(e.target.value);
    setName(sanitizedNameValue);
  };

// Handling the email change
  const handleEmail = (e) => {
    let sanitizedEmailValue = sanitizeHtml(e.target.value);
    setEmail(sanitizedEmailValue);
  };

// Handling the password change
  const handlePassword = (e) => {
    let sanitizedPasswordValue = sanitizeHtml(e.target.value);
    setPassword(sanitizedPasswordValue);
  };

// Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
      setError(true);
      setSubmitted(false);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };
  //Showing success message
  const successMessage = () => {
    return (
        submitted?
        <div className='z-10 backdrop-blur-md w-full h-screen -mt-[40rem] absolute '>
        <Success/>
        </div>
        : null
  )}


// Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
        display: error ? '' : 'none',
        }}>
        <h1>Please enter all the fields</h1>
      </div>
    );
  };


  return (
    <div className='text-black flex flex-col text-center w-11/12 ml-[1em] mt-[5%] Gradient-Bg py-10'>
      <h1 className='text-3xl font-bold'>Please <br/> Signup below</h1>
      <div className="form mt-5 ml-5">
        {/* Calling to the methods */}
        <div className="messages text-red-500 text-2xl font-bold">
          {errorMessage()}
        </div>
        <form className='mt-5 w-9/12 text-2xl font-bold justify-items-center ml-[2.5rem]'>
          {/* Labels and inputs for form data */}
          <label className="label block mb-5">Name</label>
          <input 
          className="input mb-3 placeholder:text-2xl"
          required={true}
          value={name}
          name="name" 
          placeholder='Ex: John Doe'
          autoFocus
          min={5}
          onChange={handleName} 
          type="text" /><br/>

          <label className="label block mb-5">Email</label>
          <input 
          placeholder='Ex: JohnDoe@example.com'
          required
          name="email"
          className="input mb-3 placeholder:text-base"
          value={email} 
          onChange={handleEmail} 
          type="email" /><br/>

          <label className="label block mb-5">Password</label>
          <input 
          className="input placeholder:text-base"
          min={8}
          max={12}
          placeholder='Minimum is 8 numbers, symbols or strings.'
          value={password}
          name="password" 
          required
          onChange={handlePassword} 
          type="password" /><br/>
          <button 
          className="BoxShadow mt-9 p-5 w-11/12 rounded-full InitialBg" 
          onClick={handleSubmit} 
          type="submit">
          Submit
          </button>
        </form>
      </div>
        <div className="messages text-green-600 text-2xl font-bold">
          {successMessage()}
          </div>
    </div>
  )
}

export default Signup