import React from 'react';
import useRegister from "../Register/useRegister";


function Register() {

  const {
    handleChange,
    handleSubmit,
    values,
    errors
  } = useRegister();
   
  return (
    <div className='d-flex p-4 bd-highlight border border border-2 border-light justify-content-center '>
    <form onSubmit={handleSubmit} >
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
        <input
            className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
            type='email' 
            placeholder='Email...' 
            value={values.email  || ''} 
            onChange={handleChange} 
            name="email"
        />
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
      </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input 
              className="form-control" 
              id="exampleInputPassword1"
              type='password' 
              placeholder='Password...' 
              value={values.password  || ''} 
              onChange={handleChange} 
              name="password"
          />
          <div id="passwordHelpBlock" className="form-text">
            Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
          </div>
        </div>

        <div className="d-grid gap-2 col-4 mx-auto">
          <button  className="btn btn-outline-secondary" disabled={errors.length >= 1} type='submit' >Sing-In</button>
        </div>
    </form>
</div>
  )
}

export default Register














