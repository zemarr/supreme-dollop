import React from "react";
import { Button, StyledSection } from "../../GlobalStyles";
// import { AiFillThunderbolt } from "react-icons/ai";
import { GiCrystalBars } from "react-icons/gi";
import { GiCutDiamond, GiRock } from "react-icons/gi";
// import { GiFloatingCrystal } from "react-icons/gi";
import { IconContext } from "react-icons/lib";
import {
  PricingWrapper,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature,
} from "./Pricing.elements";
import { Heading } from "../InfoSection/InfoSection.elements";

function Pricing({ lightBg }) {
  return (
    <IconContext.Provider value={{ color: "#a9b3c1", size: 64 }}>
      {lightBg ? (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#f2f2f2"
            fill-opacity="1"
            d="M0,224L18.5,234.7C36.9,245,74,267,111,229.3C147.7,192,185,96,222,80C258.5,64,295,128,332,133.3C369.2,139,406,85,443,90.7C480,96,517,160,554,170.7C590.8,181,628,139,665,101.3C701.5,64,738,32,775,32C812.3,32,849,64,886,85.3C923.1,107,960,117,997,112C1033.8,107,1071,85,1108,74.7C1144.6,64,1182,64,1218,74.7C1255.4,85,1292,107,1329,133.3C1366.2,160,1403,192,1422,208L1440,224L1440,0L1421.5,0C1403.1,0,1366,0,1329,0C1292.3,0,1255,0,1218,0C1181.5,0,1145,0,1108,0C1070.8,0,1034,0,997,0C960,0,923,0,886,0C849.2,0,812,0,775,0C738.5,0,702,0,665,0C627.7,0,591,0,554,0C516.9,0,480,0,443,0C406.2,0,369,0,332,0C295.4,0,258,0,222,0C184.6,0,148,0,111,0C73.8,0,37,0,18,0L0,0Z"
          ></path>
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#121324"
            fill-opacity="1"
            d="M0,224L18.5,234.7C36.9,245,74,267,111,229.3C147.7,192,185,96,222,80C258.5,64,295,128,332,133.3C369.2,139,406,85,443,90.7C480,96,517,160,554,170.7C590.8,181,628,139,665,101.3C701.5,64,738,32,775,32C812.3,32,849,64,886,85.3C923.1,107,960,117,997,112C1033.8,107,1071,85,1108,74.7C1144.6,64,1182,64,1218,74.7C1255.4,85,1292,107,1329,133.3C1366.2,160,1403,192,1422,208L1440,224L1440,0L1421.5,0C1403.1,0,1366,0,1329,0C1292.3,0,1255,0,1218,0C1181.5,0,1145,0,1108,0C1070.8,0,1034,0,997,0C960,0,923,0,886,0C849.2,0,812,0,775,0C738.5,0,702,0,665,0C627.7,0,591,0,554,0C516.9,0,480,0,443,0C406.2,0,369,0,332,0C295.4,0,258,0,222,0C184.6,0,148,0,111,0C73.8,0,37,0,18,0L0,0Z"
          ></path>
        </svg>
      )}
      <StyledSection mediumPadding>
        <PricingWrapper>
          <Heading midi>Our Services</Heading>
          <PricingContainer>
            <PricingCard to="/sign-up">
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan>Starter Pack</PricingCardPlan>
                <PricingCardCost>$99.99</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>100 New Users</PricingCardFeature>
                  <PricingCardFeature>$10,000 Budget</PricingCardFeature>
                  <PricingCardFeature>Retargeting analytics</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to="/sign-up">
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon>
                <PricingCardPlan>Gold Rush</PricingCardPlan>
                <PricingCardCost>$299.99</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>1000 New Users</PricingCardFeature>
                  <PricingCardFeature>$50,000 Budget</PricingCardFeature>
                  <PricingCardFeature>Lead Gen Analytics</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to="/sign-up">
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCutDiamond />
                </PricingCardIcon>
                <PricingCardPlan>Diamond Kings</PricingCardPlan>
                <PricingCardCost>$999.99</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Unlimited Users</PricingCardFeature>
                  <PricingCardFeature>Unlimited Budget</PricingCardFeature>
                  <PricingCardFeature>24/7 Support</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </StyledSection>
    </IconContext.Provider>
  );
}
export default Pricing;
