import styled from "styled-components";
export const App = styled.div`
  background-color: ${(props) => props.theme.bg};
  min-height: 100vh;
  overflow: hidden;
  transition: 0.4s ease-in-out;
  overflow-x: hidden;
`;
