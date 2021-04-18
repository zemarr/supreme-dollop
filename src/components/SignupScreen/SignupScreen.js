import React, { useState } from "react";
import { Container, StyledSection } from "../../GlobalStyles";
import SignupForm from "./SignupForm";
import SignupSuccess from "./SignupSuccess";

const SignUpScreen = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <StyledSection mediumPadding lightBg>
      <Container>
        {!isSubmitted ? (
          <SignupForm submitForm={submitForm} />
        ) : (
          <SignupSuccess />
        )}
      </Container>
    </StyledSection>
  );
};

export default SignUpScreen;
