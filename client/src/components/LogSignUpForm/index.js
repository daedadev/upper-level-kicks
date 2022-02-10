import { useRef, useState, useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { auth, provider } from "../../config/firebaseConfig";
import { useNavigate } from "react-router-dom";
import "./style.css";

export default function LogSignUpForm() {
  const mainString = window.location.href.split("?")[0];

  const loginType = mainString.substring(mainString.lastIndexOf("/") + 1);

  const emailRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const { signup, login, currentUser } = useAuth();
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

  // Sign Up Function
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

  // Google Login
  function logInWithGoogle() {
    auth.signInWithPopup(provider).then(() => {
      navigate("/").catch((err) => {
        console.log(err);
        setError("Google Sign In Failed");
      });
    });
  }

  // Sign Up Function
  function handleSubmitSignUp(e) {
    e.preventDefault();

    if (!passwordRef.current.value) {
      return setError("Username is required");
    }

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError("Passwords do not match");
    }

    if (passwordRef.current.value == "" || emailRef.current.value == "") {
      return setError("Please enter an email and password");
    }
    try {
      setError("");
      setLoading(true);
      signup(
        emailRef.current.value,
        passwordRef.current.value,
        usernameRef.current.value
      ).then(() => {
        navigate("/");
        window.location.reload();
      });
    } catch (err) {
      console.log(err);
      setError("Failed to create an account");
    }
    setLoading(false);
  }

  // Log in Function
  async function handleSubmitLogIn(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      login(emailRef.current.value, passwordRef.current.value)
        .then(() => {
          navigate("/");
        })
        .catch(function (err) {
          console.log(err.code);
          switch (err.code) {
            case "auth/wrong-password":
              setError("Invalid Password");
              break;
          }
          return;
        });
    } catch (err) {
      console.log(err);
      setError("Failed to log in");
    }
    setLoading(false);
  }

  // JSX variable to toggle between login and signup forms
  const loginForm = (
    <form className="login-form" onSubmit={handleSubmitLogIn}>
      <div>Log In</div>
      {error && <label className="danger-label">{error}</label>}
      <label>Email</label>
      <input type="text" className="login-input" ref={emailRef}></input>
      <label>Password</label>
      <input type="password" className="login-input" ref={passwordRef}></input>
      <button type="submit" className="login-button" disabled={loading}>
        Log In
      </button>
      <button onClick={logInWithGoogle} type="button" className="google-button">
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
        type="password"
        className="login-input"
        ref={confirmPasswordRef}
      ></input>
      <label>Username</label>
      <input type="text" className="login-input" ref={usernameRef}></input>
      <button type="submit" className="login-button" disabled={loading}>
        Sign Up
      </button>

      <button className="google-button" type="button" onClick={logInWithGoogle}>
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
