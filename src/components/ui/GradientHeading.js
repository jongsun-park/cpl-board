import styled, { css, keyframes } from "styled-components";

const movingGradient = keyframes`
0% {
    background-position: 0% 50%;
}
50% {
    background-position: 100% 50%;
}
100% {
    background-position: 0% 50%;
}
`;

export const GradientHeading1 = styled.h1`
  background-color: #0093e9;
  background-image: linear-gradient(160deg, #106cb5 0%, #13a397 100%);
  background-size: 400% 400%;

  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;

  animation: ${movingGradient} 12s ease infinite;

  font-size: 2rem;

  ${(props) =>
    props.center &&
    css`
      text-align: center;
    `}
`;
