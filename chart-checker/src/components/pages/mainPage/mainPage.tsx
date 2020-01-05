import React, { Component } from "react";
import { FilledButton, OutlinedButton } from "@jsluna/button";
import { Container } from "@jsluna/grid";
import { Heading3, Heading5 } from "@jsluna/typography";
import charticon from "../../../images/charticon.svg";
import "./mainPage.css";

type MainPagePropsType = {
  history: any;
  children: any;
};

type MainPageStateType = {
  courses: [];
};

class MainPage extends Component<MainPagePropsType, MainPageStateType> {
  constructor(props) {
    super(props);

    this.state = {
      courses: []
    };
  }

  // Before the component mounts, we initialise our state
  componentWillMount() {}

  // After the component did mount, we set the state each second.
  componentDidMount() {
    this.setState({ courses: [] });
  }

  uploadImageToChart: Function = () => {
    console.log("Open phone camera or open drag and drop");
  };

  render() {
    return (
      <Container element="div" className="mainPage">
        <img src={charticon} className="chartIcon" alt="Not avaliable" />
        <Heading3>Hey pop pickers!</Heading3>
        <Heading5 className="mainPageHeader5Text">
          Get the latest on what's hot and what's not in movies music games and
          books.
        </Heading5>

        <FilledButton
          className="mainPageCheckYourChartsBtn"
          onClick={() => this.props.history.push("/chart/check")}
        >
          Check your charts
        </FilledButton>
        <Container element="br" />

        <OutlinedButton
          className="mainPageChangeYourChartsBtn"
          onClick={() => this.props.history.push("/chart/change")}
        >
          Change your charts
        </OutlinedButton>
      </Container>
    );
  }
}

export default MainPage;
