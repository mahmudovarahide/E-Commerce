import React, { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../../../utils/firebase/firebase.utils";
import Swal from "sweetalert2";

const defaultFormField = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formField, setFormField] = useState(defaultFormField);
  const { name, email, password, confirmPassword } = formField;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };
  const resetFormFields = () => {
    setFormField(defaultFormField);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('passwords do not match');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { name });
     if(createUserDocumentFromAuth){
        Swal.fire(
            'Əla!',
            'Siz uğurla qeydiyyatdan keçdiniz!',
            'success'
          )
     }
      resetFormFields();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        Swal.fire({
            icon: 'error',
            title: 'Təəssüf...',
            text: 'Bu Email Artıq istifadə olunur',
          })
      } else {
        console.log('user creation encountered an error', error);
      }
    }
  };
  return (
    <div>
      <h1>SignUp</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-box">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            required
            onChange={handleChange}
            name="name"
            value={name}
          />
        </div>
        <div className="form-box">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            required
            onChange={handleChange}
            name="email"
            value={email}
          />
        </div>
        <div className="form-box">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            required
            onChange={handleChange}
            name="password"
            value={password}
          />
        </div>
        <div className="form-box">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            type="password"
            required
            onChange={handleChange}
            name="confirmPassword"
            value={confirmPassword}
          />
        </div>
        <button type="submit" aria-label="Sign Up">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
