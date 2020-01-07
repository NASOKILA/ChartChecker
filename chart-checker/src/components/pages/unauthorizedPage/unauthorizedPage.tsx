import React, { FunctionComponent } from "react";
import { Heading3, Text } from "@jsluna/typography";
import { Container } from "@jsluna/grid";
import { ErrorCircle } from "@jsluna/icons";
import "./unauthorizedPage.css";

type UnauthorizedPagePropsType = {};

const UnauthorizedPage: FunctionComponent<UnauthorizedPagePropsType> = () => {
  return (
    <Container className="ln-u-text-align-center unauthorizedPage">
      <ErrorCircle className="error-circle" />
      <Heading3 className="unauthorized-message">
        You do not have permission to access this page
      </Heading3>
      <Text element="p">
        Contact the system administrator if you need access
      </Text>
    </Container>
  );
};

export default UnauthorizedPage;
