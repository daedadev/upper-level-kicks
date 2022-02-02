import { useContext, useEffect, createContext, useState } from "react";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <section className="main-holder">
      <LoginForm />
    </section>
  );
};

export default LoginPage;
