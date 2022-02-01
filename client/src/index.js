import { render } from "react-dom";
import App from "./App";
import { ContextProvider } from "./context/context";
import "./index.css";

render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById("root")
);
