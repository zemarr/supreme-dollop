import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { Container, NavLogo } from "../../GlobalStyles";
import { colorModeObj } from "../../Pages/LandingPage/Data";

import NavIcon from "../../img/headshot-logo-blue.png";

// import { IconContext } from "react-icons/lib"; // Basically took advantage of the IconContext by subscribing to the Provider

export const StyledHeader = styled.header`
  background: ${({ lightBg }) => (lightBg ? "#f2f2f2" : "#000113")};
  box-shadow: 0px 0px 20px -10px black;
  position: sticky;
  width: 100%;
  top: 0;
  z-index: 999;
`;

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding-top: .2.5rem;
  padding-bottom: .2.5rem;
  color: ${({ lightBg }) => (lightBg ? "#000113" : "#fff")};
`;

export const HamburgerIcon = styled.div`
  display: none;
  height: 50px;

  @media screen and (max-width: 768px) {
    display: block;
    position: relative;
    top: 0;
    right: 0;
    transfrom: translate(-100, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  background: transparent;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 90px;
    overflow: hidden;
    left: ${({ click }) =>
      click
        ? 0
        : "-100%"}; //we destructured an aobject to use click to take the value of click state we created in the main component. click will toggle the left position of itself between 0 and 100% when click is true or false.
    opacity: 1;
    transition: all 0.5s ease;

    background: ${({ lightBg }) => (lightBg ? "#f2f2f2" : "#000113")};
  }
`;
export const NavItem = styled.li`
  height: 60px;
  display: flex;
  align-items: center;
  border-bottom: 2px solid transparent;
  transition: all 0.3s ease-in-out;
  color: ${({ lightBg }) => (lightBg ? "#1c2237" : "#fff")};

  &:hover {
    border-bottom: 2px solid ${({ lightBg }) => (lightBg ? "#A3A3A9" : "#A3A3A9")};
    transition: all 0.3s ease-in-out;
  }

  @media screen and (max-width: 768px) {
    height: 60px;
    width: auto;
    border: none;

    &:hover {
      border: none;
      align-items: center;
    }
  }
`;

export const NavLinks = styled(Link)`
  color: inherit;
  font-size: 17px;
  font-weight: 400;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  // height: 100%;
  transition: all 0.3s ease;

  &:hover {
    color: inherit;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  @media screen and (max-width: 768px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    transition: all 0.3s ease;

    &:hover {
      color: #4b59f7;
      transition: all 0.3s ease;
    }
  }
`;

export const NavItemButton = styled.li`
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%auto;
    height: 120px;
  }
`;

export const NavButtonLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 6px 12px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;

  &:hover {
    text-decoration: none;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%auto;
    height: 120px;
  }
`;

export const HamburgerWrapper = styled.div`
  padding: 0.7rem;
  min-width: 50px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  div {
    background: ${({ lightBg }) => (lightBg ? "#000" : "#fff")};
  }
`;
export const TopLine = styled.div`
  height: 2px;
  width: 25px;
`;
export const CenterLine = styled.div`
  height: 2px;
  width: 25px;
`;
export const BottomLine = styled.div`
  height: 2px;
  width: 25px;
`;

export const CloseHamburgerWrapper = styled.div`
  padding: 0.7rem;
  min-width: 50px;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    background: ${({ lightBg }) => (lightBg ? "#000" : "#fff")};
  }
`;
export const LeftSide = styled.div`
  height: 2px;
  width: 25px;
  transform: rotate(45deg);
  position: absolute;
`;
export const RightSide = styled.div`
  height: 2px;
  width: 25px;
  transform: rotate(-45deg);
  position: absolute;
`;

export const Hamburger = ({ lightBg }) => {
  return (
    <HamburgerWrapper lightBg={lightBg}>
      <TopLine></TopLine>
      <CenterLine></CenterLine>
      <BottomLine></BottomLine>
    </HamburgerWrapper>
  );
};

export const CloseHamburger = ({ lightBg }) => {
  return (
    <CloseHamburgerWrapper lightBg={lightBg}>
      <LeftSide></LeftSide>
      <RightSide></RightSide>
    </CloseHamburgerWrapper>
  );
};

const Navbar = ({ lightBg }) => {
  const [click, setClick] = useState(false); // create state for clicks on the navbar (initial value = false)
  const [button, setButton] = useState(true); // create state for buttons on the navbar (initial value = true) including the hamburger and styling

  const handleClick = () => setClick(!click); // method for toggling the click state and returning a value;

  const showButton = () => {
    // method to check if the hamburger would show or not,
    if (window.innerWidth <= 768) {
      // if the width of the device on page load is less than or equal to 768px, then button should be false, else it should be true
      setButton(false);
    } else {
      setButton(true);
    }
  };
  // We have to create a separate handler to close the menu for performance reasons
  const handleClose = () => {
    if (click === true) {
      setClick(false);
    } else {
      return;
    }
  };
  // It's brilliant. The way the situation is controlled. I refused letting it have one and an opposite result for a true or false statement. Instead I decided to switch the board and call the shots.
  // First I set the button to show by default
  // Then I use a method to say if the screen width is less than/equal to 768, the button wouldn't show. > At first I was like, this dude must be cray cray but listen to this...
  // I have two props in his component that possess different data and I wish to show one or both of them.
  // So, I use the tenary operator to toggle between true and false. When it is false it shows the button with only one of its style props, and when button is true, it shows the component with both style props.

  useEffect(() => {
    // useEffect hook to run on mount of this component
    showButton(); // The showButton method is fired and tracked by the state
  }, [button]);

  window.addEventListener("resize", showButton); // add an event listener to listen for window resize, any time the resize action is carried the showButton function will run.

  return (
    <>
      <StyledHeader lightBg={lightBg}>
        <Container>
          <StyledNav lightBg={lightBg}>
            <NavLogo to="/" onClick={handleClose}>
              <img src={NavIcon} alt="" width="50px" />
            </NavLogo>
            <HamburgerIcon onClick={handleClick}>
              {" "}
              {/* Use the handleClick method to toggle between the hamburger & close icons */}
              {click ? (
                <CloseHamburger {...colorModeObj} />
              ) : (
                <Hamburger {...colorModeObj} />
              )}
            </HamburgerIcon>
            <NavMenu onClick={handleClick} click={click} lightBg={lightBg}>
              {" "}
              {/* Here we introduced a "click" method to pass the click state as props. This way the component's styling can have access to the value of click state. */}
              <NavItem lightBg={lightBg}>
                <NavLinks to="/services">Services</NavLinks>
              </NavItem>
              <NavItem lightBg={lightBg}>
                <NavLinks to="/products">Products</NavLinks>
              </NavItem>
              {/* <NavItemButton>
                {button ? (
                  <NavButtonLink to="/sign-up">
                    <Button primary>SIGN UP</Button>
                  </NavButtonLink>
                ) : (
                  <NavButtonLink to="/sign-up">
                    <Button fontBig primary>
                      SIGN UP
                    </Button>
                  </NavButtonLink>
                )}
              </NavItemButton> */}
            </NavMenu>
          </StyledNav>
        </Container>
        {/* </IconContext.Provider> */}
      </StyledHeader>
    </>
  );
};

export default Navbar;
