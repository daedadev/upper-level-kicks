import React, { useState } from "react";

const UserContext = React.createContext({
  token: "",
  id: "",
  isLoggedIn: false,
  setTokenFunction: (token) => {},
  setIDFunction: (ID) => {},
  setLoggedInFunction: (LoggedIn) => {},
});

export const UserContextProvider = (props) => {
  const [userToken, setUserToken] = useState("");
  const [userID, setUserID] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  function setTokenFunction(data) {
    setUserToken(data);
  }

  function setIDFunction(data) {
    setUserID(data);
  }

  function setLoggedInFunction(data) {
    setLoggedIn(data);
  }

  const userContextValue = {
    token: userToken,
    userID: userID,
    loggedIn: loggedIn,
    setTokenFunction: setTokenFunction,
    setIDFunction: setIDFunction,
    setLoggedInFunction: setLoggedInFunction,
  };

  return (
    <UserContext.Provider value={userContextValue}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
