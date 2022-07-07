import React, {useContext} from 'react';

// import from project
import E from './Modalsec.style';
import {
    VALIDATOR_REQUIRE,
    VALIDATOR_MINLENGTH,
    VALIDATOR_EMAIL,
    VALIDATOR_FILE
  } from '../../utill/validators';
  import { Button } from '..';
import { Input } from '..';
import { useForm } from '../../hooks/form-hook';
import { useHttp } from '../../hooks/http-hook';
import { AuthContext } from '../../context/auth-context';
import {ImageUpload} from '..'


function Modal({descriptionButtonInternal,fetch_api,obgRowTable,onCancel}) {
    const titleButton = descriptionButtonInternal ? 'Add': 'Edit';
    const auth = useContext(AuthContext);
    const {
        error,
        sendRequest
        } =
        useHttp();

    const [formState, inputHandler] = useForm(
        {
          firstName: {
            value: '',
            isValid: false
          },
          lastName: {
            value: '',
            isValid: false
          },
          email: {
            value: '',
            isValid: false
          },
          gender: {
            value: '',
            isValid: false
          },    
          status: {
            value: '',
            isValid: false
          },
          image : {
            value: '',
            isValid: false
          }
        },
        false
      );
        let URL;
      if( fetch_api === 'POST') {
         URL=  'http://localhost:3000/api/register/table';
      } else {
         URL=  `http://localhost:3000/api/register/table/${obgRowTable._id}`;
      }
    const addUserHandler =async (event)=>{
        event.preventDefault();
        try {
          const formData = new FormData();
          formData.append('firstName', formState.inputs.firstName.value);
          formData.append('LastName', formState.inputs.lastName.value);
          formData.append('email', formState.inputs.email.value);
          formData.append('gender', formState.inputs.gender.value);
          formData.append('status', formState.inputs.status.value);
          formData.append('nameCreate', auth.userId);
          formData.append('image', formState.inputs.image.value);
            const sendRequestBack = await sendRequest (
                URL,
                fetch_api,
                formData
            );
            if(sendRequestBack){
              onCancel()
            }
        } catch (err) {
            console.log(err)
        }
    }

  return (
        <E.Root onSubmit={addUserHandler}>
            <Input 
                type='text' 
                id="firstName"
                element="input"
                label="FirstName"
                initialValue= {obgRowTable === undefined ? '' : obgRowTable.firstName}
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter a valid firstName."
                onInput={inputHandler}
            >
            </Input>
            <Input
                type='text' 
                id="lastName"
                element="input"
                label="LastName"
                initialValue= {obgRowTable === undefined ? '' : obgRowTable.LastName}
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter a valid lastName."
                onInput={inputHandler}
            >
            </Input>
            <Input
                type='email' 
                id="email"
                element="input"
                label="Email"
                initialValue={obgRowTable === undefined ? '' : obgRowTable.email}
                validators={[VALIDATOR_REQUIRE(),VALIDATOR_EMAIL()]}
                errorText="Please enter a valid email."
                onInput={inputHandler}
            >
            </Input>
            <Input
                type='text' 
                id="gender"
                elementValueOne="Male"
                elementValueTwo="Female"                
                label="gender"
                initialValue={obgRowTable === undefined ? '' : obgRowTable.gender}
                validators={[VALIDATOR_REQUIRE()]}
                errorText="Please enter a valid gender."
                onInput={inputHandler}
            >
            </Input>
            <Input
                type='text' 
                id="status"
                elementValueOne="True"
                elementValueTwo="False"
                label="status"
                initialValue={obgRowTable === undefined ? '' : obgRowTable.status}
                validators={[VALIDATOR_MINLENGTH(3)]}
                errorText="Please enter a valid status."
                onInput={inputHandler}
            >
            </Input>
            <ImageUpload
              id="image"
              onInput={inputHandler}
              errorText="Please provide an image."
              center='center'
            />
            <p>{error}</p>
            <Button type="submit" >{titleButton}</Button>
        </E.Root>
  )
}

export default Modal;