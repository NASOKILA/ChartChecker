import React, { FunctionComponent } from "react";
import { Heading3 } from "@jsluna/typography";
import { Container } from "@jsluna/grid";
import "./changeStorePage.css";

type ChangeStorePagePropsType = {
  history: any;
  children: any;
};

const ChangeStorePage: FunctionComponent<ChangeStorePagePropsType> = props => {
  return (
    <Container element="div" className="changeStorePage">
      <Heading3>Change store!</Heading3>
    </Container>
  );
};

export default ChangeStorePage;
