const url = () => `https://${window.location.host}`;

export const backendApiHost =
  process.env.NODE_ENV === "production"
    ? `${url()}/checkchart/api/`
    : "http://localhost:5001/api/";

// add other microservice apis here
