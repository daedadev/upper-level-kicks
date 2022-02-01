import React, { useState } from "react";

const ShoeContext = React.createContext({
  shoeContext: "",
  setShoeContext: (shoe) => {},
  relatedShoeContext: "",
  setRelatedShoeContext: (shoe) => {},
});

export const ContextProvider = (props) => {
  const [shoeContext, setShoeContext] = useState();
  const [relatedShoeContext, setRelatedShoeContext] = useState();

  function setShoeContextFunction(data) {
    setShoeContext(data);
  }

  function setRelatedShoeContextFunction(data) {
    setRelatedShoeContext(data);
  }

  const contextValue = {
    shoeContext: shoeContext,
    setShoeContext: setShoeContextFunction,
    relatedShoeContext: relatedShoeContext,
    setRelatedShoeContext: setRelatedShoeContextFunction,
  };

  return (
    <ShoeContext.Provider value={contextValue}>
      {props.children}
    </ShoeContext.Provider>
  );
};

export default ShoeContext;
