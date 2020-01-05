import React, { Component } from "react";
import { Heading1, Heading3, Text } from "@jsluna/typography";
import { Container } from "@jsluna/grid";
import { IconButton } from "@jsluna/button";
import { ArrowLeft, ErrorCircle } from "@jsluna/icons";
import Product from "../../../product/product";
import "./chartErrorPage.css";

type ChartErrorPagePropsType = {
  history: any;
  children: any;
};

type ProductType = {
  type: string;
  title: string;
  oldPosition: string;
  newPosition: string;
  change: string;
};

type ChartErrorPageStateType = {
  products: ProductType[];
};

class ChartErrorPage extends Component<
  ChartErrorPagePropsType,
  ChartErrorPageStateType
> {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    };
  }

  // Before the component mounts, we initialise our state
  componentWillMount() {}

  // After the component did mount, we set the state each second.
  componentDidMount() {
    let dummyData: ProductType[] = [];

    let product1: ProductType = {
      type: "DVD",
      title: "Paddington 2",
      newPosition: "New 1",
      change: "",
      oldPosition: ""
    };

    let product2: ProductType = {
      type: "DVD",
      title: "Murder on the Orient Express",
      newPosition: "New 8",
      change: "Down 7",
      oldPosition: "New 1"
    };

    let product3: ProductType = {
      type: "DVD",
      title: "Murder on the Orient Express",
      newPosition: "New 9",
      change: "Down 8",
      oldPosition: "New 3"
    };

    let product4: ProductType = {
      type: "DVD",
      title: "Complete Paddington (box set)",
      newPosition: "New 4",
      change: "",
      oldPosition: ""
    };

    dummyData.push(product1);
    dummyData.push(product2);
    dummyData.push(product3);
    dummyData.push(product4);
    dummyData.push({
      type: "DVD",
      title: "Only the Brave",
      newPosition: "New 5",
      change: "",
      oldPosition: ""
    });

    this.setState({ products: dummyData });
  }

  render() {
    return (
      <Container element="div" className="chartErrorPage">
        <Container className="chartErrorPageBackButtonContainer">
          <IconButton
            className="chartErrorPageBackButton"
            variant="text"
            label="Back"
            onClick={() => {
              this.props.history.push("/main");
            }}
          >
            <ArrowLeft />
          </IconButton>
        </Container>
        <Heading1>Here's how your chart is looking</Heading1>
        <ErrorCircle className="chartErrorPageWarning" />
        <Heading3>
          There's still a few movers and shakers in your chart
        </Heading3>
        <Text element="p" className="chartErrorPageText">
          Looks like there's a few products in the incorrect chart number. To
          get your chart up to date, move these products.
        </Text>

        {this.state.products.map((product, i) => {
          let backgroundColor = i % 2 === 0 ? "white" : "#f6f6f6";

          return (
            <Container
              key={i}
              className="productsList"
              style={{ backgroundColor: backgroundColor }}
            >
              <Product product={product} />
            </Container>
          );
        })}
      </Container>
    );
  }
}

export default ChartErrorPage;
