import styled from "styled-components";

const Layout = ({ children }) => {
  return <LayoutContainer>{children}</LayoutContainer>;
};

const LayoutContainer = styled.div`
  max-width: 1024px;
  margin: 1rem auto;
`;
export default Layout;
