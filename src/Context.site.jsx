import React, { createContext, useState } from "react";
import { Theme } from "./Theme";

export const ThemeContext = createContext();
export const ThemesProvider = ({ children }) => {
  const horas = new Date();
  const [theme, setTheme] = useState(
    horas.getHours() < 19 && horas.getHours() > 6 ? Theme.light : Theme.dark
  );
  console.log(horas.getTime());
  const alterTheme = () => {
    if (theme === Theme.dark) {
      setTheme(Theme.light);
    } else {
      setTheme(Theme.dark);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, alterTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
