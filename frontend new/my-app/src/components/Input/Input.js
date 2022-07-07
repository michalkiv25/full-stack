import React, { useReducer, useEffect } from 'react';

import {validate} from '../../utill/validators';
import './Input.css';

const inputReducer = (state, action) => {
//action- type-CHANGE, after press on button TOUCH
//        val- Tap the keyboard
//        validators- Before the prop passed

  switch (action.type) {
    case 'CHANGE':
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators)
      };
    case 'TOUCH': {
      return {
        ...state,
        isTouched: true
      }
    }
    default:
      return state;
  }
};


const Input = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    //start state
    value: props.initialValue || '',
    isTouched: false,
    isValid: props.initialValid || false
  });

  // inputState- obj {value, isTouched, isValid}
  const { id, onInput } = props;
  const { value, isValid } = inputState;

  useEffect(() => {
    onInput(id, value, isValid)
  }, [id, value, isValid, onInput]);

  const changeHandler = event => {
    dispatch({
      type: 'CHANGE',
      val: event.target.value,
      validators: props.validators
    });
  };

  const touchHandler = () => { //Switch to another input
    dispatch({
      type: 'TOUCH'
    });
  };
  let element; 
    if (props.element === 'input'){
      element = 
        <input
          id={props.id}
          type={props.type}
          placeholder={props.placeholder || ""}
          onChange={changeHandler}
          onBlur={touchHandler}
          value={inputState.value}
        />
    } else if (props.element === 'textarea') {
      element = 
        <textarea
          id={props.id}
          rows={props.rows || 3}
          onChange={changeHandler}
          onBlur={touchHandler}
          value={inputState.value}
        />
    } else {
      element = 
        <select id={props.id}        
          onChange={changeHandler}
          onBlur={touchHandler}
         >
          <option value={inputState.value}>--Please choose an option--</option>
          <option value={props.elementValueOne}>{props.elementValueOne}</option>
          <option value={props.elementValueTwo}>{props.elementValueTwo}</option>
        </select>
        
    }
    
 


  return (
    <div className={`form-control ${!inputState.isValid && inputState.isTouched &&
      'form-control--invalid'}`}>
        <label htmlFor={props.id}>{props.label}</label>
        {element}
        {!inputState.isValid && inputState.isTouched && <p>{props.errorText}</p>}
    </div>    
  )
}

export default Input;
