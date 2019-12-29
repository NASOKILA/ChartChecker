import React, { FunctionComponent } from "react";
import { Heading1 } from "@jsluna/typography";
import { Container } from "@jsluna/grid";
import { IconButton } from "@jsluna/button";
import { ArrowLeft } from "@jsluna/icons";
import "./notfoundPage.css";

type NotFoundPagePropsType = {
  history: any;
  children: any;
};

const NotFoundPage: FunctionComponent<NotFoundPagePropsType> = props => {
  return (
    <Container element="div" className="NotfoundPage">
      <IconButton
        className="NotfoundPageBackButton"
        variant="text"
        label="Back"
        onClick={() => {
          props.history.push("/");
        }}
      >
        <ArrowLeft />
      </IconButton>
      <Heading1 className="ln-u-color-orange ln-u-text-align-center ln-u-text-decoration-underline">
        404 NOT FOUND
      </Heading1>
    </Container>
  );
};

export default NotFoundPage;
