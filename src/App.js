import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { ScrollToTop } from "./components/ScrollToTop";
import GlobalStyle from "./GlobalStyles";
import { colorModeObj } from "./Pages/LandingPage/Data";
import LandingPage from "./Pages/LandingPage/LandingPage";
// import Products from "./Pages/Products/Products";
// import Services from "./Pages/Services/Services";
import Resume from "./Pages/Resume/Resume";

const MainWrapper = styled.div`
  background: ${({ lightBg }) => (lightBg ? "#f2f2f2" : "#000113")};
`;

const App = () => {
  return (
    <MainWrapper {...colorModeObj}>
      <Router>
        <GlobalStyle />
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          {/* <Route path="/services" exact component={Services} /> */}
          {/* <Route path="/products" exact component={Products} /> */}
          <Route path="/cv" exact component={Resume} />
          {/* <Route path="/sign-up" exact component={Signup} /> */}
        </Switch>
      </Router>
    </MainWrapper>
  );
};

export default App;
