import React, {createContext} from "react";

const ThemeContext = createContext();

const ThemeContextProvider = ({children}) => {
  const initialState = {color: black};
  return (
    <ThemeContext.Provider value={initialState}>
      {children}
    </ThemeContext.Provider>
  );
};

export {ThemeContext, ThemeContextProvider};
