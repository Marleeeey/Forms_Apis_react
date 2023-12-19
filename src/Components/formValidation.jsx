import React, { useRef } from 'react'
import './formValid.css'

const formValidation = () => {



  const fNameField = useRef();
  const lNameField = useRef();
  const emailField = useRef();
  const passField = useRef();

  const validateForm = () => {
    const fNameV = fNameField.current.value;
    const lNameV = lNameField.current.value;
    const emailV = emailField.current.value;
    const passV = passField.current.value;

    if(!fNameV.trim()){
      console.log('fName error');
    }
    if(!lNameV.trim()){
      console.log('lNameError');
    }

    console.log({
      fNameV,
      lNameV,
      emailV,
      passV
    });
  }



  const handleSubmit = (e) => {
    e.preventDefault();

    if(!validateForm()) {
      e.preventDefault();
    }
  }



  return (
    <div>
        <form className="form" onSubmit={handleSubmit}>
          <p className="title">Register </p>
          <p className="message">Signup now and get full access to our app. </p>
          <div className="flex">
            <label>
              <input className="input" type="text" placeholder="" required="" ref={fNameField}/>
                <span>Firstname</span>
            </label>

            <label>
              <input className="input" type="text" placeholder="" required="" ref={lNameField}/>
                <span>Lastname</span>
            </label>
          </div>

          <label>
            <input className="input" type="email" placeholder="" required="" ref={emailField}/>
              <span>Email</span>
          </label>

          <label>
            <input className="input" type="password" placeholder="" required="" ref={passField}/>
              <span>Password</span>
          </label>
          <button className="submit" type='submit'>Submit</button>
          <p className="signin">Already have an acount ? <a href="#">Signin</a> </p>
        </form>
    </div>
  )
}

export default formValidation