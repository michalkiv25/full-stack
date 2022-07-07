import React from 'react';
import { Link } from 'react-router-dom';

import './Button.css';

const Button = props => {
  if (props.href) {
    return (
      <div className='wrapper_btn'>
        <a
          className={`button button--${props.size || 'default'} ${props.inverse &&
            'button--inverse'} ${props.danger && 'button--danger'}`}
          href={props.href}
        >
          {props.children}
        </a>
      </div>
    );
  }

  if (props.to) {
    return (
      <div className='wrapper_btn'>
        <Link
          to={props.to}
          exact={props.exact}
          className={`button button--${props.size || 'default'} ${props.inverse &&
            'button--inverse'} ${props.danger && 'button--danger'}`}
        >
          {props.children}
        </Link>
      </div>
    );
  }
  return (
    <div className='wrapper_btn'>
      <button
        className={`button button--${props.size || 'default'} 
          ${props.buttonHeader && 'button--header'}
          ${props.inverse &&'button--inverse'} 
          ${props.danger && 'button--danger'} 
          ${props.icon && 'button--icon'} 
          ${props.buttonAdd && 'button--buttonAdd'} 
         `
      }
        type={props.type}
        onClick={props.onClick}
        disabled={props.disabled}
      >
        {props.children}
      </button>
    </div>
  );
};

export default Button;
