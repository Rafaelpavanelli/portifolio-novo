import styled from 'styled-components';
export const Container = styled.div`
  font-family: 'Inconsolata';
  font-weight: 300;
  text-transform: uppercase;
  background: transparent;
  position: sticky;
  width: 95vw;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 4vh;
  height: 10vh;
  svg[type="hamburger"]{
    display: none;
  }
  @media (max-width: 768px) {
    flex-direction: column;
  
    svg[type="hamburger"]{
    display: flex;
    display: none;
    cursor: pointer;
    position: fixed;
    top: 10px;
    right: 30px;
    font-size: 1.5rem;
    
    }
    overflow: hidden;
    position: absolute;
  li{
    display: none;
    display: none;
  }
  ${( props ) => props.aberto && `
    height: 100vh;
    width: 30%;
    margin: 0px;
    flex-direction: column;
    background-color: transparent;
    right: 0px;
    justify-content: start;
    align-items: center;
    li{
      transform: translateX(0px);
      display: block;
      margin: 5vh 0px;
    }
  `}
  
  }
`;

export const ButtonTheme=styled.button`
  background-color: ${(props)=>props.theme.theme === 'light' ? "light" : 'black'};
  color: ${(props)=>props.theme.theme === 'light' ? "black": "white"};
  width: 2.5vw;
  font-size: 1.2rem;
  height: 5vh;
  border: 1px solid ${(props)=>props.theme.theme === 'light' ? "gray": "white"};
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top:3;
  transition: 0.5s ease-in-out;
  position: fixed;
  bottom: 10px;
  right: 10px;
  z-index: 1000;
  
`;
export const Link=styled.li`
display: none;
  width: 4vw;
  height: 4vh;
  text-align: center;
  list-style: none;
  margin: 0px 6vw;
 
  &:hover{
    a{
      border-bottom: 1px solid ${(props)=>props.theme.theme === 'light' ? "black" : "white"}
    }
  }
  a{
    transition: 0.2s ease-in-out;
    border-bottom: 1px solid transparent;
    text-decoration: none;
    color: ${(props)=>props.theme.theme !== 'light' ? "white" : "black"}
  }

`
