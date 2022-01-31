import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg";
import visibilityIcon from "../assets/svg/visibilityIcon.svg";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { db } from "../firebase.config";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { toast } from "react-toastify";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = formData;
  const navigate = useNavigate();
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      updateProfile(auth.currentUser, { displayName: name });

      // a copy of the user data to avoid changing the state
      const formDataCopy = { ...formData };
      delete formDataCopy.password; // to avoid storing the password in the db
      formDataCopy.timestamp = serverTimestamp();

      await setDoc(doc(db, "users", user.uid), formDataCopy);

      console.log("singup succesfull");
      navigate("/");
    } catch (error) {
      toast.error(
        "something went wrong with the registration. please try again"
      );
    }
  };

  return (
    <>
      <div className="pageContainer"></div>
      <header>
        <p className="pageHeader">Welcome back!</p>
      </header>
      <main>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            className="nameInput"
            placeholder="Name"
            id="name"
            value={name}
            onChange={onChange}
          />
          <input
            type="email"
            className="emailInput"
            placeholder="Email"
            id="email"
            value={email}
            onChange={onChange}
          />
          <div className="passwordInputDiv">
            <input
              type={showPassword ? "text" : "password"}
              className="passwordInput"
              placeholder="password"
              id="password"
              value={password}
              onChange={onChange}
            />
            <img
              src={visibilityIcon}
              alt="show password"
              className="showPassword"
              value={password}
              alt="show password"
              onClick={() => setShowPassword((prevState) => !prevState)}
            />
          </div>
          <Link to="/forgot-password" className="forgotPasswordLink">
            Forgot password
          </Link>
          <div className="signUpBar">
            <p className="signUpText">Sign Up</p>
            <button className="signUpButton">
              <ArrowRightIcon fill="#ffffff" width="34px" height="34px" />
            </button>
          </div>
        </form>

        {/* {google oauth} */}
        <Link to="/sign-in" className="registerLink">
          Sign In instead
        </Link>
      </main>
    </>
  );
}

export default SignUp;
