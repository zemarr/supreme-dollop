import { FaMagento } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterSubscription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 24px;
  padding: 24px;
  color: #fff;
`;
export const FooterSubheading = styled.p`
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#1c2237")};
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 500;
  margin-bottom: 24px;
  font-size: 24px;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;
export const FooterSubtext = styled.p`
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#1c2237")};
  margin-bottom: 24px;
  font-size: 20px;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;
export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60%;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    width: 80%;
  }
  @media screen and (max-width: 425px) {
    width: 100%;
  }
`;
export const FormInput = styled.input`
  padding: 10px 20px;
  border-radius: 2px;
  margin-right: 10px;
  outline: none;
  font-size: 16px;
  border: 1px solid #fff;
  width: 50%;

  &::placeholder {
    color: #a8a8a8;
  }

  @media screen and (max-width: 860px) {
    width: 100%;
    margin: 0 0 16px 0;
  }
`;
export const FooterLinksContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;
export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    width: 50%;
  }
`;

export const FooterLinksItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: ${({ lightBg }) => (lightBg ? "#000" : "#fff")};

  @media screen and (max-width: 768px) {
    margin: 16px 0;
    padding: 0;
    width: 140px;
    min-height: 200px;
  }
`;

export const FooterLinkTitle = styled.h5`
  margin-bottom: 16px;
  color: inherit;
`;
export const FooterLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  margin-bottom: 0.5rem;

  &:hover {
    color: #0467fb;
    transition: 0.3s ease-out;
    text-decoration: none;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
`;
export const SocialMediaWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 40px auto 0 auto;
  color: ${({ lightBg }) => (lightBg ? "#000" : "#fff")};

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: inherit;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 600;
  display: flex;
  align-items: center;

  &:hover {
    text-decoration: none;
    color: initial;
  }

  @media screen and (max-width: 820px) {
    margin-bottom: 16px;
  }
`;

export const SocialIcon = styled(FaMagento)`
  margin-right: 10px;

  &:hover {
    text-decoration: none;
    color: initial;
  }
`;

export const WebsiteRights = styled.small`
  color: ${({ lightBg }) => (lightBg ? "#000" : "#fff")};

  @media screen and (max-width: 820px) {
    margin-bottom: 16px;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
  color: ${({ lightBg }) => (lightBg ? "#000" : "#fff")};
`;
export const SocialIconLink = styled.a`
  color: inherit;
  font-size: 24px;

  &:hover {
    text-decoration: none;
    color: initial;
  }
`;
