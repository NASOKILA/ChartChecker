import Axios from "axios";
import { backendApiHost } from "./apiHost";
import { getAccessToken } from "../utils/auth";

const axios = () =>
  Axios.create({
    baseURL: backendApiHost,
    timeout: 30000
  });

const getHeaders = token => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
      ContentType: "application/json"
    }
  };
};

export const PostFormValues = data =>
  getAccessToken()
    .then(token => {
      return axios().post("/files", data, getHeaders(token));
    })
    .catch(error => {
      throw error;
    });

export const GetValues = () =>
  getAccessToken()
    .then(token => {
      debugger;
      return axios().get("/files");
    })
    .catch(error => {
      debugger;
      throw error;
    });
