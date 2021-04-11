import React, {useState} from "react";
import {THEMELIST} from "../context/ThemeContext";

const useTheme = initialTheme => {
  const [theme, setTheme] = useState(initialTheme);
  return {
    theme,
    toggleTheme: () => {
      if (theme === THEMELIST.DARK) setTheme(THEMELIST.LIGHT);
      else setTheme(THEMELIST.DARK);
      console.log(`Theme toggled to ${theme}`);
    },
  };
};

export default useTheme;
