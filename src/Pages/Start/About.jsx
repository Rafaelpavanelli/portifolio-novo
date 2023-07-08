import { Container } from "./AboutStyle"
import { TypingEffect } from "../Components/typing";
export const About = () =>{
 
  return(
    <Container>
      <h1><TypingEffect text={'Olá, me chamo Rafael!'} timing={100}/></h1>
    </Container>
  )
}