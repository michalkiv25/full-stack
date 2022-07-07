import React from 'react';
import { useNavigate } from 'react-router-dom'; //In react-router-dom v6 useHistory() is replaced by useNavigate().

import E from './Login.style';
import { Input } from '../../components';
import { Button } from '../../components';
import { useHttp } from '../../hooks/http-hook';
import { useForm } from '../../hooks/form-hook';
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from '../../utill/validators';




function Login() {
  const navigate = useNavigate(); // const history = useHistory();
  const { sendRequest, clearError, error } = useHttp();

  const [formState, inputHandler] = useForm(
    {
      email: {
        value: '',
        isValid: false
      },
      password: {
        value: '',
        isValid: false
      }
    },
    false
  );

  const submitHandler =async event => {
    event.preventDefault();

    const URL = "http://localhost:3000/api/login/add"
    try {
      const responseData = await sendRequest(
        URL,
        'POST',
        JSON.stringify({
          email: formState.inputs.email.value,
          password: formState.inputs.password.value
        }),
        {
          'Content-Type': 'application/json'
        }
      );



    } catch (err) {
      console.log(err)
      if(error){
        console.log(error)     
       }
    }
   }

  return (
    <E.Root onSubmit={submitHandler}>
        <div>
          <Input
            type='text'
            element="input"
            id="first Name"
            label="FirstName"
            validators={[VALIDATOR_MINLENGTH(2)]}
            errorText="Please enter a valid password, at least 6 characters."
            onInput={inputHandler}
          />
        </div>
        <div>
          <Input
            type='text'
            element="input"
            id="lastName"
            label="Last Name"
            validators={[VALIDATOR_MINLENGTH(2)]}
            errorText="Please enter a valid Last Name, at least 6 characters."
            onInput={inputHandler}
          />
        </div>
      <div>
        <Input
          type='password'
          element="input"
          id="password"
          label="Password"
          validators={[VALIDATOR_MINLENGTH(6)]}
          errorText="Please enter a valid EMAIL, at least 6 characters."
          onInput={inputHandler}
        />
      </div>
      <div>
      <Input
        type='email'
        element="input"
        id="email"
        label="E-mail"
        validators={[VALIDATOR_EMAIL()]}
        errorText="Please enter a valid EMAIL, at least 6 characters."
        onInput={inputHandler}
      />
    </div>
      <div className='form-actions'>
        <Button disabled={!formState.isValid}>Submit</Button>
      </div>
    </E.Root>
  )
}

export default Login;