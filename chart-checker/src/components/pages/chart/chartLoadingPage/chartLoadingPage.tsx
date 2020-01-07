import React, { FunctionComponent } from "react";
import { Heading1, Text } from "@jsluna/typography";
import { Container } from "@jsluna/grid";
import { ProgressSpinner } from "@jsluna/progress";
import "./chartLoadingPage.css";

type ChartLoadingPagePropsType = {};

const ChartLoadingPage: FunctionComponent<ChartLoadingPagePropsType> = () => {
  return (
    <Container element="div" className="chartLoadingPage">
      <Heading1>There's a new entry for the chart ...</Heading1>
      <ProgressSpinner size="large" />

      <Text element="p" className="chartLoadingPageText">
        Uploading your photo and comparing the movers and shakers this week ...
      </Text>
    </Container>
  );
};

export default ChartLoadingPage;
