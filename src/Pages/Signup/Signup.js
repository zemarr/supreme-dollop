import React from "react";

import SignupScreen from "../../components/SignupScreen/SignupScreen";
import { SignUpObj } from "./Data";

const Signup = () => {
  return (
    <>
      <SignupScreen {...SignUpObj} />
    </>
  );
};

export default Signup;
