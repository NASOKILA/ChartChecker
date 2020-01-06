import React, { FunctionComponent, useState } from "react";
import { Heading5 } from "@jsluna/typography";
import { Container } from "@jsluna/grid";
import { ListView } from "@jsluna/icons";
import { Form, RadioButtonField } from "@jsluna/form";
import { FilledButton } from "@jsluna/button";
import axios from "axios";
import "./chartCheckPage.css";

type ChartCheckPagePropsType = {
  history: any;
  children: any;
};

const ChartCheckPage: FunctionComponent<ChartCheckPagePropsType> = props => {
  const [chartType, setChartType] = useState("");
  const [uploadError, setUploadError] = useState("");

  const handleFormSubmit = e => {
    e.preventDefault();
    document.getElementById("file-input")!.click();
  };

  const validateFile = event => {
    let file = event.target.files[0];
    let size = 300000;
    let err = "";

    if (file.size > size) {
      err = file.type + " is too large, please pick a smaller file. \n";
      setUploadError(err);
      return false;
    }

    if (file.type !== "image/jpeg" && file.type !== "image/png") {
      err = " File type needs to be png or jpeg. \n";
      setUploadError(err);
      return false;
    }

    setUploadError(err);
    return true;
  };

  const onChangeHandler = event => {
    var file = event.target.files[0];
    if (validateFile(event)) {
      fileUploadHandler(file);
    }
  };

  const fileUploadHandler = file => {
    console.log("selectedFile uploaded");
    const data = new FormData();
    data.append("file", file); //try file!

    const data2 = new FormData();
    data2.append("name", "Atanas");

    axios
      .get(`https://localhost:5001/api/files`)
      .then(res => {
        console.log("success");
        console.log(res);
      })
      .catch(err => {
        console.log("error");
        console.log(err);
      });

    // const data3 = { name: "Atanas" };
    // axios
    //   .post("https://localhost:5001/api/files", data3)
    //   .then(res => {
    //     // then print response status
    //     console.log("upload success");
    //     console.log(res);
    //   })
    //   .catch(err => {
    //     // then print response status
    //     console.log("upload fail");
    //     console.log(err);
    //   });
  };

  return (
    <Container element="div" className="chartCheckPage">
      <ListView className="listViewIcon" />
      <Heading5 className="chartCheckerPage">
        Make sure you've made all the right moves
      </Heading5>
      <Container element="div" className="formContainer">
        <Form
          enctype="multipart/form-data"
          element="form"
          className="chartCheckerForm"
          onSubmit={handleFormSubmit}
        >
          <RadioButtonField
            label="Select the chart to check"
            name="radio-button-field-1"
            onChange={e => setChartType(e.target.value)}
            error={uploadError}
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
          <input
            id="file-input"
            type="file"
            name="chart-image"
            multiple
            onChange={e => onChangeHandler(e)}
            // style={{ display: "block" }}
          />
        </Form>
      </Container>
    </Container>
  );
};

export default ChartCheckPage;
