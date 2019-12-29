import React, { Component } from "react";
import { IconButton, FilledButton } from "@jsluna/button";
import { Container } from "@jsluna/grid";
import { Plus } from "@jsluna/icons";
import "./mainPage.css";

type MainPagePropsType = {};

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
        <FilledButton
          fullWidth
          className="mainPageUploadBtn"
          onClick={this.uploadImageToChart}
        >
          <Plus className="mainPageUploadPlus" /> Upload image of chart
        </FilledButton>
      </Container>
    );
  }
}

export default MainPage;
