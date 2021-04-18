import { Link } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { FaMagento } from "react-icons/fa";

// font-family: 'Roboto Condensed', sans-serif;
// font-family: 'Source Sans Pro', sans-serif;
// font-family: 'Titillium Web', sans-serif;

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    /* font-family: 'Roboto Condensed', sans-serif; */
    letter-spacing: 0px;
    color: #1c2237;
}

html {
  font-size: 17px;
}

body {
  margin: 0;
  padding: 0;
}

h1,h2,h3,h4,h5,h6 {
  font-family: 'Source Sans Pro', sans-serif;
  font-weight: 600;
  letter-spacing: -1.5px;
}

p {
  font-family: 'Titillium Web', sans-serif;
  font-size: inherit;
  font-weight: 300;
}

a {
  font-family: 'Titillium Web', sans-serif;
  font-weight: 300;
}
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;

  @media screen and (max-width: 1135px) {
    padding: 0 1.0875rem;
  }
`;
export const NavLogo = styled(Link)`
  color: inherit;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  &:hover {
    color: ${({ lightTextDesc }) => (lightTextDesc ? "#fff" : "#1c2237")};
    text-decoration: none;
  }
`;

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? "#4b59f7" : "#0467fb")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  margin: ${({ margined }) => (margined ? "1rem 0" : "")};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    color: #fff;
    background: ${({ primary }) => (primary ? "#0467fb" : "#4b59f7")};
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const StyledSection = styled("section")`
  background: inherit;
  padding: ${({ mediumPadding }) => (mediumPadding ? "50px 0" : "160px 0")};
  color: ${({ lightBg }) => (lightBg ? "#e2e2e2" : "#0e0e0e")};
  padding-bottom: ${({ noPaddingBottom }) => (noPaddingBottom ? "16px" : "")};
`;

export default GlobalStyle;
