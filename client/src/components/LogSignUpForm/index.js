import { useRef, useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { googlePopup } from "../../config/firebaseConfig";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

export default function LogSignUpForm() {
  const mainString = window.location.href.split("?")[0];

  const loginType = mainString.substring(mainString.lastIndexOf("/") + 1);

  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [formType, setFormType] = useState(false);
  const [loginButton, setLoginButton] = useState("");
  const [signupButton, setSignupButton] = useState("");

  useEffect(() => {
    if (loginType === "login") {
      setFormType(true);
      setLoginButton("active");
      setSignupButton("inactive");
    }
    if (loginType === "signup") {
      setFormType(false);
      setLoginButton("inactive");
      setSignupButton("active");
    }
  }, []);

  function changeFormType(type) {
    if (type === true) {
      setError("");
      setLoginButton("active");
      setSignupButton("inactive");
    }
    if (type === false) {
      setError("");
      setLoginButton("inactive");
      setSignupButton("active");
    }
    setFormType(type);
  }

  function handleSubmitSignUp(e) {
    e.preventDefault();

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
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
      setError("Failed to log in");
    }
    setLoading(false);
  }

  const loginForm = (
    <form className="login-form">
      <div>Log In</div>
      {error && <label className="danger-label">{error}</label>}
      <label>Email</label>
      <input type="text" className="login-input" ref={emailRef}></input>
      <label>Password</label>
      <input type="password" className="login-input" ref={passwordRef}></input>
      <button
        type="submit"
        className="login-button"
        disabled={loading}
        onClick={handleSubmitLogIn}
      >
        Log In
      </button>
      <button onClick={googlePopup} className="google-button">
        <img src="https://cdn.cdnlogo.com/logos/g/35/google-icon.svg" />
        Sign In With Google
      </button>
    </form>
  );

  const signupForm = (
    <form className="login-form" onSubmit={handleSubmitSignUp}>
      <div>Sign Up</div>
      {error && <label className="danger-label">{error}</label>}
      <label>Email</label>
      <input type="text" className="login-input" ref={emailRef}></input>
      <label>Password</label>
      <input type="password" className="login-input" ref={passwordRef}></input>
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
        Sign In With Google
      </button>
    </form>
  );

  return (
    <div className="login-form-holder">
      {formType ? loginForm : signupForm}
      <div id="logsign-button-holder">
        <button
          id={signupButton}
          className="signupButton-class"
          onClick={() => changeFormType(false)}
        >
          Sign Up
          <div></div>
        </button>
        <button
          id={loginButton}
          className="loginButton-class"
          onClick={() => changeFormType(true)}
        >
          Log in
          <div></div>
        </button>
      </div>
    </div>
  );
}
