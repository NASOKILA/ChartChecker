import React, { FunctionComponent } from "react";
import { Heading1, Heading3, Text } from "@jsluna/typography";
import { Container } from "@jsluna/grid";
import { IconButton, FilledButton } from "@jsluna/button";
import { ArrowLeft, Like } from "@jsluna/icons";
import "./chartSuccessPage.css";

type ChartSuccessPagePropsType = {
  history: any;
  children: any;
};

const ChartSuccessPage: FunctionComponent<ChartSuccessPagePropsType> = props => {
  return (
    <Container element="div" className="chartSuccessPage">
      <Container className="chartSuccessPageBackButtonContainer">
        <IconButton
          className="chartSuccessPageBackButton"
          variant="text"
          label="Back"
          onClick={() => {
            props.history.push("/main");
          }}
        >
          <ArrowLeft />
        </IconButton>
      </Container>
      <Heading1>Here's how your chart is looking</Heading1>
      <Like className="chartSuccessPageLike" />
      <Heading3>Your top of the pops!</Heading3>
      <Text element="p" className="chartSuccessPageText">
        Looks like your chart is all up to date and each product is in the
        correct chart number.
      </Text>
      <FilledButton fullWidth className="chartSuccessPageHomeBtn">
        Home
      </FilledButton>
    </Container>
  );
};

export default ChartSuccessPage;
