import { ThemeProvider } from "styled-components";
import { ButtonThemes } from "./Components/ButtonTheme";
import { ThemeContext } from "../Context.site";
import { useContext } from "react";
import { App } from "./appStyle";
export const Layout = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <ThemeProvider theme={theme}>
        <App>{children}</App>
        <ButtonThemes />
      </ThemeProvider>
    </>
  );
};
