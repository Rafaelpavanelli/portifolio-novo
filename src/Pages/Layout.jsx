import { Navbar } from "./Components/Navbar"
import { ThemeProvider } from "styled-components"
import { ThemeContext } from "../Context.site"
import { useContext } from "react"
import { App } from "./appStyle";
export const Layout=({children})=>{
  const{theme}=useContext(ThemeContext)
  return(
    <>
    <ThemeProvider theme={theme}>
      <App>
      <Navbar />
      {children}
      </App>
    </ThemeProvider>
     
    </>
  )
  
}