
import styled from 'styled-components';
export const Container = styled.div` 
  width: 100%;
  height: 80vh;
  margin-bottom: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3.0rem;
 h1{
  color: ${props=>props.theme.primary}
 }
`;