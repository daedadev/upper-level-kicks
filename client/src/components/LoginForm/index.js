import "./style.css";

export default function LoginForm() {
  return (
    <form className="login-form">
      <label>Username</label>
      <input type="text" className="login-input"></input>
      <label>Email</label>
      <input type="text" className="login-input"></input>
      <button type="submit">Login</button>
    </form>
  );
}
