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
import { AuthContext } from '../../context/auth-context'


function Modal({setmodalEdit,allRow,descriptionButtonInternal,fetch_api,obgRowTable,setAllRow}) {
    const titleButton = descriptionButtonInternal ? 'Add': 'Edit';
    const auth = useContext(AuthContext);

    const {
        isLoading,
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
        //   image : {
        //     value: '',
        //     isValid: false
        //   }
        },
        false
      );


    const addUserHandler =async (event)=>{
        event.preventDefault();
        console.log(formState.inputs); // send this to the backend!
        console.log(auth)
        try {
                await sendRequest (
                    'http://localhost:3000/api/register/table', 
                    fetch_api,
                    JSON.stringify({
                        firstName: formState.inputs.firstName.value,
                        LastName: formState.inputs.lastName.value,
                        email:  formState.inputs.email.value,
                        gender: formState.inputs.gender.value,
                        status: formState.inputs.status.value,
                        // image:formState.inputs.image.value,
                        nameCreate: '62bd5e1f6069ccab360d7fe9',
                    }),
                    { 'Content-Type': 'application/json' }
                    );
            
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
                element="input"
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
                element="input"
                label="status"
                initialValue={obgRowTable === undefined ? '' : obgRowTable.status}
                validators={[VALIDATOR_MINLENGTH(3)]}
                errorText="Please enter a valid status."
                onInput={inputHandler}
                >
            </Input>
            {/* <Input
                type='file' 
                id="image"
                element="input"
                label="image"
                validators={[VALIDATOR_FILE()]}
                errorText="Please enter a valid image."
                onInput={inputHandler}
                >
            </Input> */}
            <Button type="submit" >{titleButton}</Button>
        </E.Root>
  )
}

export default Modal;