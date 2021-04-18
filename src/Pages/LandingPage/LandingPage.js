import React from "react";
import { Footer, Navbar } from "../../components";

import InfoSection from "../../components/InfoSection/InfoSection";
import Pricing from "../../components/Pricing/Pricing";
import {
  LandingPageContentObj,
  LandingPageObjFour,
  colorModeObj,
  FooterObj,
} from "./Data";

const LandingPage = () => {
  return (
    <>
      <Navbar {...colorModeObj} />
      <InfoSection {...LandingPageContentObj} {...colorModeObj} />
      <Pricing {...colorModeObj} />
      <InfoSection {...LandingPageObjFour} />
      <Footer {...FooterObj} {...colorModeObj} />
    </>
  );
};

export default LandingPage;
