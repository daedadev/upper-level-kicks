import { useContext, useEffect, createContext, useState } from "react";
import SignUpForm from "../components/SignUpForm";

const SignupPage = () => {
  return (
    <section className="main-holder">
      <SignUpForm />
    </section>
  );
};

export default SignupPage;
