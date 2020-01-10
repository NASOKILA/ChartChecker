import React, { FunctionComponent, useState } from "react";
import { Heading5 } from "@jsluna/typography";
import { Container } from "@jsluna/grid";
import { ListView } from "@jsluna/icons";
import { Form, RadioButtonField } from "@jsluna/form";
import { FilledButton } from "@jsluna/button";
import * as backendApi from "../../../../api/backendApi";
import "./chartCheckPage.css";

type ChartCheckPagePropsType = {
  history: any;
  children: any;
};

const ChartCheckPage: FunctionComponent<ChartCheckPagePropsType> = props => {
  const [chartType, setChartType] = useState("");
  const [uploadError, setUploadError] = useState("");
  const [imageName, setImageName] = useState("");
  const [pageLoading, setpageLoading] = useState("");

  const handleFormSubmit: Function = (e: any) => {
    e.preventDefault();
    document.getElementById("file-input")!.click();
  };

  const validateFile: Function = (event: any) => {
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

  const onChangeHandler: Function = (event: any) => {
    var file = event.target.files[0];
    if (file !== undefined && file !== null) {
      setImageName(file.name);

      if (validateFile(event)) {
        fileUploadHandler(file);
      }
    }
  };

  const fileUploadHandler: Function = (file: any) => {
    saveImageToServer(file);
  };

  const saveImageToServer: Function = (file: any) => {
    const formData = new FormData();
    formData.append("file", file);

    backendApi
      .UploadImage(formData)
      .then(res => {
        console.log("Success");
        console.log(res);
        saveEventToDatabase(res.data.imagePath);
      })
      .catch(err => {
        console.log("Error");
        console.log(err);
      });
  };

  const saveEventToDatabase: Function = (imagePath: string) => {
    const loggedInUser: any = JSON.parse(
      String(localStorage.getItem("userObject"))
    );
    const data = {
      UserEmail: loggedInUser.displayableId,
      StoreName: loggedInUser.defaultStore.StoreName,
      ChartType: chartType,
      ImagePath: imagePath,
      EventDateTime: new Date()
    };
    backendApi
      .PostFormValues(data)
      .then(res => {
        console.log("Success");
        console.log(res);
      })
      .catch(err => {
        console.log("Error");
        console.log(err);
      });
  };

  return (
    <Container element="div" className="chartCheckPage">
      <ListView className="listViewIcon" />
      <Heading5 className="chartCheckerPage">
        Make sure you've made all the right moves
      </Heading5>
      <Container element="div" className="formContainer">
        <Form
          encType="multipart/form-data"
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
              { value: "artist", label: "Artist" },
              { value: "songs", label: "Songs" },
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
          <Container className="ImageNameContainer">{imageName}</Container>
          <input
            id="file-input"
            type="file"
            name="chart-image"
            multiple
            onChange={e => onChangeHandler(e)}
            style={{ display: "none" }}
          />
        </Form>
      </Container>
    </Container>
  );
};

export default ChartCheckPage;
