import React from "react";
import { Container, StyledSection } from "../../GlobalStyles";

const Cv = ({ lightBg }) => {
  return (
    <>
      <StyledSection mediumPadding lightBg={lightBg}>
        <Container>
          <h1>CV</h1>
        </Container>
      </StyledSection>
    </>
  );
};

export default Cv;
