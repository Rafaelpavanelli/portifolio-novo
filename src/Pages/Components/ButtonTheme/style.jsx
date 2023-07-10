import styled from "styled-components";

export const ButtonTheme = styled.button`
  background-color: ${(props) =>
    props.theme.theme === "light" ? "light" : "black"};
  color: ${(props) => (props.theme.theme === "light" ? "black" : "white")};
  font-size: 1.2rem;
  width: 40px;
  height: 40px;
  border: 1px solid
    ${(props) => (props.theme.theme === "light" ? "gray" : "white")};
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3;
  transition: 0.5s ease-in-out;
  position: fixed;
  bottom: 10px;
  right: 10px;
  z-index: 10;
  @media (max-width: 768px) {
  }
`;
