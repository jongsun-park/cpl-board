import styled from "styled-components";

export const Container = styled.section`
  padding: 1em;
  margin: 1em;
  border-radius: 5px;
  border: 1px solid #eee;

  &:hover,
  &:focus {
    box-shadow: 0em 0em 10px rgb(0 0 0 / 5%);
  }
`;

export const InnerContainer = styled.div`
  margin-bottom: 1em;
`;
