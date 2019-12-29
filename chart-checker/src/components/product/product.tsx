import React, { FunctionComponent } from "react";
import { Heading5, Text } from "@jsluna/typography";
import { Container } from "@jsluna/grid";
import "./product.css";

type Product = {
  type: string;
  title: string;
  oldPosition: string;
  newPosition: string;
  change: string;
};

type ProductPropsType = {
  product: Product;
};

const Product: FunctionComponent<ProductPropsType> = props => {
  return (
    <Container element="div" className="productElement">
      <Heading5 style={{ display: "inline-block" }}>
        {props.product.type} title
      </Heading5>
      <Text element="span" className="productText">
        {props.product.title}
      </Text>
      <Container element="br" />
      <Heading5 style={{ display: "inline-block" }}>New position</Heading5>
      <Text element="span" className="productText">
        {props.product.newPosition === "" ? "-" : props.product.newPosition}
      </Text>
      <Container element="br" />
      <Heading5 style={{ display: "inline-block" }}>Change</Heading5>
      <Text element="span" className="productText">
        {props.product.change === "" ? "-" : props.product.change}
      </Text>
      <Container element="br" />
      <Heading5 style={{ display: "inline-block" }}>Old position</Heading5>
      <Text element="span" className="productText">
        {props.product.oldPosition === "" ? "-" : props.product.oldPosition}
      </Text>
    </Container>
  );
};
export default Product;
