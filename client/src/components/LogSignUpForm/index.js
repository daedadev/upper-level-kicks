import { useRef, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { googlePopup } from "../../config/firebaseConfig";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

export default function LogSignUpForm() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [formType, setFormType] = useState(false);

  function changeFormType(type) {
    setFormType(type);
  }

  function handleSubmitSignUp(e) {
    e.preventDefault();

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      console.log("bruh");
      return setError("Passwords do not match");
    }

    if (passwordRef.current.value == "" || emailRef.current.value == "") {
      return setError("Please enter an email and password");
    }
    try {
      setError("");
      setLoading(true);
      signup(emailRef.current.value, passwordRef.current.value);
    } catch (err) {
      setError("Failed to create an account");
    }
    navigate("/");
    setLoading(false);
  }

  function handleSubmitLogIn(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      login(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch (err) {
      setError("Failed to sign in");
    }
    setLoading(false);
  }

  const loginForm = (
    <form className="login-form" onSubmit={handleSubmitSignUp}>
      <div>Log In</div>
      {error && <label className="danger-label">{error}</label>}
      <label>Email</label>
      <input type="text" className="login-input" ref={emailRef}></input>
      <label>Password</label>
      <input type="text" className="login-input" ref={passwordRef}></input>
      <button type="submit" className="login-button" disabled={loading}>
        Log In
      </button>
      <button onClick={googlePopup} className="google-button">
        <img src="https://cdn.cdnlogo.com/logos/g/35/google-icon.svg" />
        Sign In With Google
      </button>
    </form>
  );

  const signupForm = (
    <form className="login-form" onSubmit={handleSubmitLogIn}>
      <div>Sign Up</div>
      {error && <label className="danger-label">{error}</label>}
      <label>Email</label>
      <input type="text" className="login-input" ref={emailRef}></input>
      <label>Password</label>
      <input type="text" className="login-input" ref={passwordRef}></input>
      <label>Confirm Password</label>
      <input
        type="text"
        className="login-input"
        ref={confirmPasswordRef}
      ></input>
      <button type="submit" className="login-button" disabled={loading}>
        Sign Up
      </button>

      <button className="google-button" onClick={googlePopup}>
        <img src="https://cdn.cdnlogo.com/logos/g/35/google-icon.svg" />
        Google Sign In
      </button>
    </form>
  );

  return (
    <div className="login-form-holder">
      {formType ? loginForm : signupForm}
      <div>
        <button onClick={() => changeFormType(false)}>Sign Up</button>
        <button onClick={() => changeFormType(true)}>Log in</button>
      </div>
    </div>
  );
}
