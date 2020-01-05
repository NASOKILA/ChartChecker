import React, { FunctionComponent } from "react";
import { Text } from "@jsluna/typography";
import { Container } from "@jsluna/grid";
import "./chartChangePage.css";

type ChartChangePagePropsType = {
  history: any;
  children: any;
};

const ChartChangePage: FunctionComponent<ChartChangePagePropsType> = props => {
  return (
    <Container element="div" className="chartChangePage">
      <Text>Chart change page</Text>
    </Container>
  );
};

export default ChartChangePage;
