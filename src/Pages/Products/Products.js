import React from "react";

import InfoSection from "../../components/InfoSection/InfoSection";
import Pricing from "../../components/Pricing/Pricing";
import {
  LandingPageObjTwo,
  LandingPageObjThree,
  LandingPageObjFour,
} from "./Data";

const Products = () => {
  return (
    <>
      
      <InfoSection {...LandingPageObjTwo} />
      <InfoSection {...LandingPageObjThree} />
      <Pricing />
      <InfoSection {...LandingPageObjFour} />
    </>
  );
};

export default Products;
