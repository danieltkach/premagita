import React, {createContext} from "react";
import useTheme from "../hooks/useTheme";
const ThemeContext = createContext();
const THEMELIST = {
  DARK: "dark",
  LIGHT: "light",
};

const ThemeContextProvider = ({children, startingTheme}) => {
  const initialState = useTheme(startingTheme);
  return (
    <ThemeContext.Provider value={initialState}>
      {children}
    </ThemeContext.Provider>
  );
};

export {ThemeContext, ThemeContextProvider, THEMELIST};
