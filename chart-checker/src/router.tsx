import React, { FunctionComponent } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Navigation from "./components/navigation/navigation";
import Footer from "./components/footer/footer";
import Main from "./components/pages/mainPage/mainPage";
import NotFoundPage from "./components/pages/notfoundPage/notfoundPage";
import UnauthorizedPage from "./components/pages/unauthorizedPage/unauthorizedPage";
import ChartSuccessPage from "./components/pages/chart/chartSuccessPage/chartSuccessPage";
import ChartErrorPage from "./components/pages/chart/chartErrorPage/chartErrorPage";
import ChartLoadingPage from "./components/pages/chart/chartLoadingPage/chartLoadingPage";

const Router: FunctionComponent = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/main" component={Main} />
        <Route exact path="/chart/success" component={ChartSuccessPage} />
        <Route exact path="/chart/error" component={ChartErrorPage} />
        <Route exact path="/chart/loading" component={ChartLoadingPage} />
        <Route exact path="/unauthorized" component={UnauthorizedPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
