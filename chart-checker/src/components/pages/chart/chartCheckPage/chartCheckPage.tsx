import React, { FunctionComponent, useState } from "react";
import { Heading5 } from "@jsluna/typography";
import { Container } from "@jsluna/grid";
import { ListView } from "@jsluna/icons";
import { Form, RadioButtonField } from "@jsluna/form";
import { FilledButton } from "@jsluna/button";
import "./chartCheckPage.css";

type ChartCheckPagePropsType = {
  history: any;
  children: any;
};

const ChartCheckPage: FunctionComponent<ChartCheckPagePropsType> = props => {
  const [chartType, setChartType] = useState("");

  const handleFormSubmit = e => {
    e.preventDefault();
    console.log(chartType);
  };

  return (
    <Container element="div" className="chartCheckPage">
      <ListView className="listViewIcon" />
      <Heading5 className="chartCheckerPage">
        Make sure you've made all the right moves
      </Heading5>
      <Container element="div" className="formContainer">
        <Form
          element="form"
          className="chartCheckerForm"
          onSubmit={handleFormSubmit}
        >
          <RadioButtonField
            label="Select the chart to check"
            name="radio-button-field-1"
            onChange={e => setChartType(e.target.value)}
            className="radioButtonField"
            fullWidth
            options={[
              { value: "music", label: "Music" },
              { value: "films", label: "Films" },
              { value: "games", label: "Games" },
              { value: "books", label: "Books" }
            ]}
          />
          {chartType !== "" ? (
            <FilledButton className="uploadImageBtn" type="submit">
              Upload image of your chart
            </FilledButton>
          ) : (
            <FilledButton disabled className="uploadImageBtn">
              Upload image of your chart
            </FilledButton>
          )}
        </Form>
      </Container>
    </Container>
  );
};

export default ChartCheckPage;
