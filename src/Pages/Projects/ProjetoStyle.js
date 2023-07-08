import styled from 'styled-components';
export const Container=styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Inconsolata';
  font-weight: 400;
  text-transform: uppercase;
  color: ${props=> props.theme.primary};
`;