import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; //In react-router-dom v6 useHistory() is replaced by useNavigate().

import useLogin from './useLogin';//Custom Hook
import "../login/login.css";

//function valid input
const isNotEmpty = (value) => value.trim() !== ''; // check if have empty
const isEmail = (value) => value.includes('@'); //check if email valid


function Login() {
  const navigate = useNavigate(); // const history = useHistory();
  const URL = "http://localhost:3000/api/login/add"
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,//error
    valueChangeHandler: firstNameChangeHandler, //onChange
    inputBlurHandler: firstNameBlurHandler,//onBlur
    reset: resetFirstName, //Clear input
  } = useLogin(isNotEmpty); //isNotEmpty- Transferred directly to validateValue
  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useLogin(isNotEmpty);
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler, //When you leave the input field
    reset: resetEmail,
  } = useLogin(isEmail);
  const {
    value: PasswordValue,
    isValid: PasswordIsValid,
    hasError: PasswordHasError,
    valueChangeHandler: PasswordChangeHandler,
    inputBlurHandler: PasswordBlurHandler,
    reset: resetPassword,
  } = useLogin(isNotEmpty);

  let formIsValid = false; // default

  if (firstNameIsValid && lastNameIsValid && emailIsValid && PasswordIsValid) {
    formIsValid = true;
  }

  const postLogin = {
    email:emailValue,
    password:PasswordValue
  }

  const submitHandler =async event => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }else{
      const response = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postLogin),
      })
      const responseData = await response.json()
      if(!response.ok){
        throw new Error(responseData.message)
      }
      if(responseData.token){
        localStorage.setItem('token', responseData.token)
        alert('Login successful')
        navigate('/table')
      }else {
        alert('Please check your username and password')
      }
   }
    //Clear input
    // resetFirstName();
    // resetLastName();
    // resetEmail();
    // resetPassword()
  };

  //style if the value not valid- class in css
  const firstNameClasses = firstNameHasError ? 'form-control invalid' : 'form-control';
  const lastNameClasses = lastNameHasError ? 'form-control invalid' : 'form-control';
  const emailClasses = emailHasError ? 'form-control invalid' : 'form-control';
  const passwordClasses = emailHasError ? 'form-control invalid' : 'form-control';

  return (

    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={firstNameClasses} >
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            value={firstNameValue  || ''}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameHasError && <p className="error-text">Please enter a first name.</p>}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor='name'>Last Name</label>
          <input
            type='text'
            value={lastNameValue  || ''}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameHasError && <p className="error-text">Please enter a last name.</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input
          type='email'
          value={emailValue  || ''}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasError && <p className="error-text">Please enter a valid email address.</p>}
      </div>
      <div className={passwordClasses}>
      <label htmlFor='name'> Password</label>
      <input
        type='password'
        value={PasswordValue || ''}
        onChange={PasswordChangeHandler}
        onBlur={PasswordBlurHandler}
      />
      {PasswordHasError && <p className="error-text">Please enter a valid Password .</p>}
    </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  )
}

export default Login