import React, { useState } from "react";

const ShoeContext = React.createContext({
  test: "",
  setTest: (shoe) => {},
});

export const ContextProvider = (props) => {
  const [test, setTest] = useState("default");
  function newShoeSearch(newShoeID) {
    fetch(`http://localhost:3001/api/product/${newShoeID}`, {
      method: `GET`,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((data) => {
        setShoeSearch(data);
        console.log(data);
      });
  }

  const contextValue = {
    test: test,
    testFunction: setTest,
  };

  return (
    <ShoeContext.Provider value={contextValue}>
      {props.children}
    </ShoeContext.Provider>
  );
};

export default ShoeContext;
