import { useRef, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { googlePopup } from "../../config/firebaseConfig";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

export default function SignUpForm() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      signup(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch (err) {
      setError("Failed to create an account");
    }
    setLoading(false);
  }

  return (
    <div className="login-form-holder">
      <form className="login-form" onSubmit={handleSubmit}>
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
      <div>
        Already have an account? <Link to="/login">Log In Here</Link>
      </div>
    </div>
  );
}
