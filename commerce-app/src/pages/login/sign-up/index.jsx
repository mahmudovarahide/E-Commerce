import React, { useContext, useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../../utils/firebase/firebase.utils";
import Swal from "sweetalert2";
import FormInputField from "../components/input.component";
import Button from "../../../components/button/button.componnet";
import { UserContext } from "../../../context/user.context";
import { useNavigate } from "react-router";

const defaultFormField = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formField, setFormField] = useState(defaultFormField);
  const { name, email, password, confirmPassword } = formField;

  const navigate =useNavigate();

  const { setCurrentUser } = useContext(UserContext);

  const resetFormFields = () => {
    setFormField(defaultFormField);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      setCurrentUser(user)
      await createUserDocumentFromAuth(user, { name });
      if (createUserDocumentFromAuth) {
        Swal.fire("Əla!", "Siz uğurla qeydiyyatdan keçdiniz!", "success");
        navigate('/')
      }
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        Swal.fire({
          icon: "error",
          title: "Təəssüf...",
          text: "Bu Email Artıq istifadə olunur",
        });
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };
  return (
    <div className="col-md-6">
      <div className="signup-head">
        <h1>Qeydiyyat</h1>
      </div>
      <form className="signUp-form" onSubmit={handleSubmit}>
        <div className="form-box">
          <FormInputField
            label="Name"
            id="name"
            type="text"
            required
            onChange={handleChange}
            name="name"
            value={name}
            placeholder="Adınızı daxil edin"
          />
        </div>
        <div className="form-box">
          <FormInputField
            label="Email"
            id="emailSignUp"
            type="email"
            required
            onChange={handleChange}
            name="email"
            value={email}
            placeholder="Soy adınızı daxil edin"
          />
        </div>
        <div className="form-box">
          <FormInputField
            label="Password"
            id="passwordSignUp"
            type="password"
            required
            onChange={handleChange}
            name="password"
            value={password}
            placeholder="Şifrənizi daxil edin"
          />
        </div>
        <div className="form-box">
          <FormInputField
            label="Confirm Password"
            id="confirmPassword"
            type="password"
            required
            onChange={handleChange}
            name="confirmPassword"
            value={confirmPassword}
            placeholder="Təkrar şifrə"
          />
        </div>
        <div className="button-box mt-4">
          <Button buttonType="signUp" type="submit" aria-label="Sign Up">
            Sign Up
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
