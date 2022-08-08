import styled, { css } from "styled-components";

export const Buttons = styled.div``;
export const Button = (props) => (
  <ButtonContainer onClick={props.onClick} {...props}>
    {props.children}
  </ButtonContainer>
);

const ButtonContainer = styled.div`
  text-transform: uppercase;
  border-radius: 4px;
  text-align: center;
  padding: 4px;
  font-size: 14px;
  margin-top: 1em;
  cursor: pointer;
  transition: all ease-in 100ms;
  font-weight: bold;
  box-sizing: border-box;

  &:hover {
    border: 2px solid #495057;
    color: #495057;
  }

  ${(props) =>
    props.outline &&
    css`
      border: 2px solid #dee2e6;
      color: #dee2e6;
    `}

  ${(props) =>
    props.primary &&
    css`
      border: 2px solid #106cb5;
      background-color: #106cb5;
      color: white;

      &:hover {
        color: white;
        border: 2px solid #00877d;
        background-color: #00877d;
      }
    `}
`;
