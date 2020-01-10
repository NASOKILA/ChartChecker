import React, { Component } from "react";
import { Heading1, Heading3, Text } from "@jsluna/typography";
import { Container } from "@jsluna/grid";
import { IconButton, OutlinedButton } from "@jsluna/button";
import { ArrowLeft, ErrorCircle } from "@jsluna/icons";
import Product from "../../../product/product";
import "./chartErrorPage.css";

type ChartErrorPagePropsType = {
  history: any;
  children: any;
};

type ProductType = {
  name: string;
  artist: string;
  currentPosition: string;
  newPosition: string;
};

type ChartErrorPageStateType = {
  products: ProductType[];
  chartType: string;
};

class ChartErrorPage extends Component<
  ChartErrorPagePropsType,
  ChartErrorPageStateType
> {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      chartType: ""
    };
  }

  // Before the component mounts, we initialise our state
  componentWillMount() {}

  // After the component did mount, we set the state each second.
  componentDidMount() {
    const chartErrorList: string = String(
      localStorage.getItem("chartErrorsList")
    );

    const chartTypeString: string = String(localStorage.getItem("chartType"));

    const chartErrorListObject: ProductType[] = JSON.parse(chartErrorList);

    //Populate the state

    let dummyData: ProductType[] = [];

    for (let i = 0; i < chartErrorListObject.length; i++) {
      const chartError = chartErrorListObject[i];
      let product: ProductType = {
        name: chartError.name,
        artist: chartError.artist,
        currentPosition: chartError.currentPosition,
        newPosition: chartError.newPosition
      };
      dummyData.push(product);
    }

    this.setState({ products: dummyData, chartType: chartTypeString });
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
        <Heading1>
          Here's how your {this.state.chartType} chart is looking
        </Heading1>
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
              <Product chartType={this.state.chartType} product={product} />
            </Container>
          );
        })}

        <OutlinedButton
          className="mainPageChangeYourChartsBtn"
          onClick={() => this.props.history.push("/chart/check")}
        >
          Change your charts
        </OutlinedButton>
      </Container>
    );
  }
}

export default ChartErrorPage;
