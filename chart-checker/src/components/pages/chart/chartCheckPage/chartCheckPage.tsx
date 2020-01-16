import React, { FunctionComponent, useState } from "react";
import { Heading5, Heading1 } from "@jsluna/typography";
import { Container } from "@jsluna/grid";
import { ListView } from "@jsluna/icons";
import { Form, RadioButtonField } from "@jsluna/form";
import { FilledButton } from "@jsluna/button";
import * as backendApi from "../../../../api/backendApi";
import { ProgressSpinner } from "@jsluna/progress";
import "./chartCheckPage.css";

type ChartCheckPagePropsType = {
  history: any;
  children: any;
};

const ChartCheckPage: FunctionComponent<ChartCheckPagePropsType> = props => {
  const [chartType, setChartType] = useState("");
  const [uploadError, setUploadError] = useState("");
  const [imageName, setImageName] = useState("");
  const [pageLoading, setpageLoading] = useState(false);

  const handleFormSubmit: Function = (e: any) => {
    e.preventDefault();
    document.getElementById("file-input")!.click();
  };

  const validateFile: Function = (event: any) => {
    let file = event.target.files[0];
    let err = "";
    //let size = 3000000;

    // if (file.size > size) {
    //   err = file.type + " is too large, please pick a smaller file. \n";
    //   setUploadError(err);
    //   return false;
    // }

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

    setpageLoading(true);

    backendApi
      .UploadImage(formData)
      .then((res: any) => {
        console.log("Success");
        console.log(res);
        saveEventToDatabase(res.data.imagePath, res.data.imageName);
      })
      .catch(err => {
        console.log("Error");
        console.log(err);
      });
  };

  const saveEventToDatabase: Function = (
    imagePath: string,
    imageName: string
  ) => {
    const loggedInUser: any = JSON.parse(
      String(localStorage.getItem("userObject"))
    );
    const data = {
      UserEmail: loggedInUser.displayableId,
      StoreName: loggedInUser.defaultStore.StoreName,
      ChartType: chartType,
      ImagePath: imagePath,
      ImageName: imageName,
      EventDateTime: new Date()
    };
    backendApi
      .PostFormValues(data)
      .then((res: any) => {
        setTimeout(() => {
          setpageLoading(false);
          if (res.data.success) {
            //Redirect to success page
            props.history.push("/chart/success");
          } else {
            //Redirect to error page
            localStorage.setItem(
              "chartErrorsList",
              JSON.stringify(res.data.chartErrorsList)
            );
            localStorage.setItem("chartType", chartType);

            props.history.push("/chart/error");
          }
        }, 7000);
      })
      .catch(err => {
        console.log("Error");
        console.log(err);
      });
  };

  return (
    <Container element="div" className="chartCheckPage">
      {pageLoading === true ? (
        <Container element="div" className="chartLoadingPage">
          <Heading1>There's a new entry for the chart ...</Heading1>
          <ProgressSpinner size="large" />

          <p className="chartLoadingPageText">
            Uploading your photo and comparing the movers and shakers this week
            ...
          </p>
        </Container>
      ) : (
        <Container element="div" className="formContainer">
          <ListView className="listViewIcon" />
          <Heading5 className="chartCheckerPage">
            Make sure you've made all the right moves
          </Heading5>
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
                { value: "artists", label: "Artists" },
                { value: "singles", label: "Singles" },
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
      )}
    </Container>
  );
};

export default ChartCheckPage;
