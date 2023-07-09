import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
  font-size: 2rem;
  flex-direction: column;
  text-transform: uppercase;
  font-family: "Inconsolata";
  color: ${(props) => props.theme.primary};
`;
