import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./pages/exporter";
import { Layout } from "./components/exporter";

const MainRoute = ({ Component, path, exact, purpose, auth, ...rest }) => {
  return (
    <Route
      exact={exact}
      path={path}
      {...rest}
      render={(props) => {
        return (
          <Layout>
            <Component {...rest} {...props} />
          </Layout>
        );
      }}
    />
  );
};

function AppRoute() {
  return (
    <Router>
      <Switch>
        <MainRoute path="/" Component={Home} exact />
        <MainRoute path="*" Component={<div>Not Found</div>} exact />
      </Switch>
    </Router>
  );
}

export default AppRoute;
