const url = () => `https://${window.location.host}`;

export const backendApiHost =
  process.env.NODE_ENV === "production"
    ? `${url()}/checkchart/api/`
    : "https://localhost:44316/api";
// Try https://localhost:5001/api/
// add other microservice apis here
