import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { applicationConfig, msal } from "./utils/auth";

type Store = {
  StoreCode: number;
  StoreName: string;
  StoreLocalTimeZone: string;
};

let baseUrl = `${window.location.protocol}//${window.location.host}${window.location.pathname}`;

const redirectUrlLocalStorageKey = "otter-frontend-redirectUrl";

const handleLogin = () => {
  const redirectUrl = window.location.href;

  if (redirectUrl === baseUrl) {
    msal.loginRedirect(applicationConfig.scopes);
  } else {
    localStorage.setItem(redirectUrlLocalStorageKey, redirectUrl);
    window.location.replace(baseUrl);
  }
};

const getApiHost = () => {
  return process.env.NODE_ENV === "production"
    ? `https://${window.location.host}/intervention` //URL OF THE DEPLOYED API
    : "http://localhost:53452"; //URL OF THE LOCAL API
};

(() => {
  if (msal.isCallback(window.location.hash)) {
    return;
  }

  const loggedInUserMSAL = msal.getUser();

  const unauthorizedPageUrl =
    process.env.NODE_ENV === "production"
      ? "/chartChecker/unauthorized" //PRODUCTION unauthorized URL
      : "/unauthorized"; //LOCAL unauthorized URL

  if (!loggedInUserMSAL) {
    handleLogin();
  } else {
    localStorage.setItem("userObject", JSON.stringify(loggedInUserMSAL));
    ReactDOM.render(<App />, document.getElementById("root"));
    serviceWorker.unregister();
  }
})();
