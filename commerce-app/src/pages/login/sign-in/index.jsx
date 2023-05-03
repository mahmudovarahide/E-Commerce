import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../../components/button/button.componnet";
import FormInputField from "../components/input.component";
import {
  signInUserWithEmailAndPassword,
  googleSignWithPopup,
} from "../../../utils/firebase/firebase.utils";
import Swal from "sweetalert2";

const defaultFormField = {
  email: "",
  password: "",
};

const SignIn = () => {
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    try {
      await googleSignWithPopup();
      navigate("/");
      Swal.fire("Əla!", "Siz uğurla daxil oldunuz!", "success");
      resetFormFields();
    } catch (error) {
      console.log(error);
    }
  };

  const [formField, setFormField] = useState(defaultFormField);
  const { email, password } = formField;

  const resetFormFields = () => {
    setFormField(defaultFormField);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { user } = await signInUserWithEmailAndPassword(email, password);
      navigate("/");

      Swal.fire("Əla!", "Siz uğurla daxil oldunuz!", "success");
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        Swal.fire({
          icon: "error",
          title: "Təəssüf...",
          text: "Email və ya şifrə düzgün deyil",
        });
      } else if (error.code === "auth/user-not-found") {
        Swal.fire({
          icon: "error",
          title: "Təəssüf...",
          text: "Email və ya şifrə düzgün deyil",
        });
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };

  return (
    <div className="col-md-6">
      <div className="signin-head">
        <h1>Qeydiyyat</h1>
      </div>
      <form className="signin" onSubmit={handleSubmit}>
        <div className="form-box">
          <FormInputField
            label="Email"
            id="email"
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
            id="password"
            type="password"
            required
            onChange={handleChange}
            name="password"
            value={password}
            placeholder="Şifrənizi daxil edin"
          />
        </div>

        <div className="button-box mt-4">
          <Button buttonType="signIn" type="submit" aria-label="Sign In">
            Sign In
          </Button>
          <Button
            type="button"
            buttonType="signInPopup"
            onClick={signInWithGoogle}
          >
            Google SignIn
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
