import { useRef, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Alert } from "react-bootstrap";
import "./style.css";

export default function LoginForm() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const { signup } = useAuth();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;
    e.prevendDefault();

    if (password !== confirmPassword) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      signup(email, password);
    } catch (err) {
      setError("Failed to create an account");
    }
    setLoading(false);
  }

  return (
    <>
      <form className="login-form" onSubmit={handleSubmit}>
        {error && <Alert variant="danger">{error}</Alert>}
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
        <button type="submit" disabled={loading}>
          Sign Up
        </button>
      </form>
    </>
  );
}
