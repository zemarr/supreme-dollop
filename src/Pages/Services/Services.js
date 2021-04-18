import React from "react";

import InfoSection from "../../components/InfoSection/InfoSection";
import Pricing from "../../components/Pricing/Pricing";
import { LandingPageObjFour } from "./Data";

const Services = () => {
  return (
    <>
      <Pricing />
      <InfoSection {...LandingPageObjFour} />
    </>
  );
};

export default Services;
