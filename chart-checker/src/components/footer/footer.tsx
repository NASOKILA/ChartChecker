//Copyright © 2004-2019 Pluralsight LLC. All rights reserved.  Privacy Policy Terms of Use
import React, { FunctionComponent } from "react";
import { Text } from "@jsluna/typography";
import { Container } from "@jsluna/grid";
import "./footer.css";

type FooterPropsType = {};

const Footer: FunctionComponent<FooterPropsType> = () => {
  return (
    <Container element="div" className="footer">
      <Text element="hr"></Text>
      <Text element="span">Copyright © ChartChecker. All rights reserved.</Text>
    </Container>
  );
};

export default Footer;
