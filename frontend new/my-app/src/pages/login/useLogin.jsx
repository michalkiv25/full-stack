import { useReducer } from 'react';

const initialInputState = { //start state
  value: '',
  isTouched: false,
};

const inputStateReducer = (state, action) => {
  if (action.type === 'INPUT') {
    return { value: action.value, isTouched: state.isTouched }; //return 2 state
  }
  if (action.type === 'BLUR') {
    return { isTouched: true, value: state.value };//return 2 state- value state
  }
  if (action.type === 'RESET') {
    return { isTouched: false, value: '' };//return 2 state -Clear input
  }
  return inputStateReducer;
};

//Manages the state of the Login- Custom input
const useLogin = (validateValue) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer, //Function with 2 state action arguments 
    initialInputState// start state
  );

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  //Saving information in a value key
  const valueChangeHandler = (event) => {
    dispatch({ type: 'INPUT', value: event.target.value }); 
  };

  //When you leave the input field show error
  const inputBlurHandler = (event) => {
    dispatch({ type: 'BLUR' });
  };
  
  //Clear input
  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useLogin;
