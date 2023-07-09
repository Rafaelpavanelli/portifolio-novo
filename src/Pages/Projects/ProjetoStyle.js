import styled from 'styled-components';
export const Container=styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Inconsolata';
  font-weight: 400;
  text-transform: uppercase;
  color: ${props=> props.theme.primary};
  h1{
    font-size: 3rem;
  }
`;