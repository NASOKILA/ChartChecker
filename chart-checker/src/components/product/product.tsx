import React, { FunctionComponent } from "react";
import { Heading5, Text } from "@jsluna/typography";
import { Container } from "@jsluna/grid";
import "./product.css";

type ProductType = {
  name: string;
  artist: string;
  currentPosition: string;
  newPosition: string;
};

type ProductPropsType = {
  product: ProductType;
  chartType: string;
};

const Product: FunctionComponent<ProductPropsType> = props => {
  return (
    <Container element="div" className="productElement">
      <Heading5 style={{ display: "inline-block" }}>Artist</Heading5>
      <Text element="span" className="productText">
        {props.product.artist}
      </Text>
      <Container element="br" />
      <Heading5 style={{ display: "inline-block" }}>Track</Heading5>
      <Text element="span" className="productText">
        {props.product.name}
      </Text>
      <Container element="br" />
      <Heading5 style={{ display: "inline-block" }}>Current position</Heading5>
      <Text element="span" className="productText">
        {props.product.currentPosition === ""
          ? "-"
          : props.product.currentPosition}
      </Text>
      <Container element="br" />
      <Heading5 style={{ display: "inline-block" }}>New position</Heading5>
      <Text element="span" className="productText">
        {props.product.newPosition === "" ? "-" : props.product.newPosition}
      </Text>
    </Container>
  );
};
export default Product;
