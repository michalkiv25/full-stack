import React, { useContext} from 'react';
import { useNavigate } from 'react-router-dom'; //In react-router-dom v6 useHistory() is replaced by useNavigate().
import { toast } from 'react-toastify'; //pop up error
import 'react-toastify/dist/ReactToastify.css';

import { Input } from '../../components';
import { Button } from '../../components';
import { useForm } from '../../hooks/form-hook';
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from '../../utill/validators';
import { useHttp } from '../../hooks/http-hook'
import { AuthContext } from '../../context/auth-context';
// import ErrorModal from '../../components/ModalError/ModalError';




toast.configure() //notification error form input
function Register() {
  const navigate = useNavigate(); // const history = useHistory();
  const { sendRequest, clearError, error } = useHttp();
  const auth = useContext(AuthContext);

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
   
  const authSubmitHandler = async event => {
    event.preventDefault();

    const URL= "http://localhost:3000/api/register/add";
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

      if (responseData){
        navigate('/login/add');
        auth.login(responseData._id);
      } 

    } catch (err) {
      console.log(err)
      if(error){
        toast.error(error)
      }
    }

  };
  return (
    <div className='d-flex p-4 bd-highlight border border border-3 border-light justify-content-center '>
      {/* <ErrorModal error={error} onClear={clearError} /> */}
      <form onSubmit={authSubmitHandler} className="form-control  form-control-sm">
        <div className="mb-3">
          <Input
              placeholder='Email...' 
              element="input"
              id="email"
              type="email"
              label="E-Mail"
              validators={[VALIDATOR_EMAIL()]}
              errorText="Please enter a valid email address."
              onInput={inputHandler}
          />
        </div>
          <div className="mb-3">
            <Input
              placeholder='Password...' 
              element="input"
              id="password"
              type="password"
              label="Password"
              validators={[VALIDATOR_MINLENGTH(6)]}
              errorText="Please enter a valid password, at least 6 characters."
              onInput={inputHandler}
            />
          </div>
          <div className="d-grid mx-auto">
            <Button type="submit" disabled={!formState.isValid} >Sing-In</Button>
          </div>
      </form>
  </div>
  )
}

export default Register














