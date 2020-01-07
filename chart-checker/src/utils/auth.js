import * as Msal from "msal";

export const applicationConfig = {
  clientId: "7460fc79-d4a8-4332-a418-53c6b89316d3",
  tenantId: "e11fd634-26b5-47f4-8b8c-908e466e9bdf",
  scopes: ["user.read"]
};

//export const msal = new Msal.UserAgentApplication(config);

export const msal = new Msal.UserAgentApplication(
  applicationConfig.clientId,
  `https://login.microsoftonline.com/${applicationConfig.tenantId}/`,
  null,
  { storeAuthStateInCookie: true, cacheLocation: "sessionStorage" }
);

export const apiHost =
  process.env.NODE_ENV === "production" ? "/api" : "http://localhost:3000/";

export const getAccessToken = () => {
  return msal
    .acquireTokenSilent([applicationConfig.clientId])
    .then(accessToken => accessToken);
};

export const logout = () => {
  let redirectUri =
    process.env.NODE_ENV === "development"
      ? window.location.origin
      : window.location.origin + "/frontend";

  sessionStorage.clear();
  const logoutUrl = `https://login.microsoftonline.com/${applicationConfig.tenantId}/oauth2/logout?clientId=${applicationConfig.clientId}&post_logout_redirect_uri=${redirectUri}`;
  window.location.replace(logoutUrl);
};
