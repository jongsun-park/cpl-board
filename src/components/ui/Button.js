import styled, { css } from "styled-components";

export const Buttons = styled.div``;
export const Button = (props) => (
  <ButtonContainer onClick={props.onClick} styles={props.styles} {...props}>
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

  ${(props) => props.styles}

  ${(props) =>
    props.outline &&
    css`
      border: 2px solid #dee2e6;
      color: #dee2e6;
    `}

  ${(props) =>
    props.primary &&
    css`
      padding: 10px;
      color: white;
      background-color: #0093e9;
      background-image: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
      border: none;

      background-position: 0% 50%;
      background-size: 400% 400%;
      transition: background ease-out 300ms;

      &:hover {
        color: white;
        background-position: 100% 50%;
        border: none;
      }
    `}
`;
