import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Button, Container, StyledSection } from "../../GlobalStyles";
import {
  FooterSubscription,
  FooterSubheading,
  FooterSubtext,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinksItem,
  FooterLinkTitle,
  FooterLink,
  SocialIcon,
  SocialIconLink,
  SocialIcons,
  SocialMedia,
  SocialMediaWrapper,
  SocialLogo,
  WebsiteRights,
} from "./Footer.elements";

const Footer = ({ lightBg, lightText }) => {
  return (
    <StyledSection lightBg={lightBg} mediumPadding noPaddingBottom>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#121324"
          fill-opacity="1"
          d="M0,224L18.5,234.7C36.9,245,74,267,111,229.3C147.7,192,185,96,222,80C258.5,64,295,128,332,133.3C369.2,139,406,85,443,90.7C480,96,517,160,554,170.7C590.8,181,628,139,665,101.3C701.5,64,738,32,775,32C812.3,32,849,64,886,85.3C923.1,107,960,117,997,112C1033.8,107,1071,85,1108,74.7C1144.6,64,1182,64,1218,74.7C1255.4,85,1292,107,1329,133.3C1366.2,160,1403,192,1422,208L1440,224L1440,0L1421.5,0C1403.1,0,1366,0,1329,0C1292.3,0,1255,0,1218,0C1181.5,0,1145,0,1108,0C1070.8,0,1034,0,997,0C960,0,923,0,886,0C849.2,0,812,0,775,0C738.5,0,702,0,665,0C627.7,0,591,0,554,0C516.9,0,480,0,443,0C406.2,0,369,0,332,0C295.4,0,258,0,222,0C184.6,0,148,0,111,0C73.8,0,37,0,18,0L0,0Z"
        ></path>
      </svg>
      <Container>
        <FooterSubscription>
          <FooterSubheading lightText={lightText}>
            Join Our exclusive membership to receive the latest news and trends
          </FooterSubheading>
          <FooterSubtext lightText={lightText}>
            You can unsubscribe at any time.
          </FooterSubtext>
          <Form>
            <FormInput
              name="email"
              type="email"
              placeholder="Enter Your Work Email"
            />
            <Button>Subscribe</Button>
          </Form>
        </FooterSubscription>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinksItem lightBg={lightBg}>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/how-it-works">How it works</FooterLink>
              <FooterLink to="/">Testimonials</FooterLink>
              <FooterLink to="/">Careers</FooterLink>
              <FooterLink to="/">Investors</FooterLink>
              <FooterLink to="/">Terms of Service</FooterLink>
            </FooterLinksItem>
            <FooterLinksItem lightBg={lightBg}>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
              <FooterLink to="/how-it-works">Contact</FooterLink>
              <FooterLink to="/">Support</FooterLink>
              <FooterLink to="/">Destinations</FooterLink>
              <FooterLink to="/">Sponsorships</FooterLink>
            </FooterLinksItem>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinksItem lightBg={lightBg}>
              <FooterLinkTitle>Videos</FooterLinkTitle>
              <FooterLink to="/how-it-works">Submit Video</FooterLink>
              <FooterLink to="/">Ambassadors</FooterLink>
              <FooterLink to="/">Agency</FooterLink>
              <FooterLink to="/">Influencer</FooterLink>
            </FooterLinksItem>
            <FooterLinksItem lightBg={lightBg}>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
              <FooterLink to="/how-it-works">Instagram</FooterLink>
              <FooterLink to="/">Facebook</FooterLink>
              <FooterLink to="/">Youtube</FooterLink>
              <FooterLink to="/">Twitter</FooterLink>
            </FooterLinksItem>
          </FooterLinksWrapper>
        </FooterLinksContainer>

        <SocialMedia>
          <SocialMediaWrapper lightBg={lightBg}>
            <SocialLogo to="/">
              <SocialIcon />
              MAGENTO
            </SocialLogo>
            <WebsiteRights lightBg={lightBg}>MAGENTO &copy; 2021</WebsiteRights>
            <SocialIcons lightBg={lightBg}>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrapper>
        </SocialMedia>
      </Container>
    </StyledSection>
  );
};

export default Footer;
