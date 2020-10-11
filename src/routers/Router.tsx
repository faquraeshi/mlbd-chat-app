import React, { memo } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import values from "lodash/values";
import { PRIVATE_ROUTES, NAVIGATION } from "./Router.config";
import DefaultLayout from "layouts/DefaultLayout/DefaultLayout";
import ErrorScreen from "ErrorScreen/ErrorScreen";
import { ClientErrors } from "constants/apiConst";

const Router = () => {
  const filteredRoutes = values(PRIVATE_ROUTES).filter(item => item.component);

  return (
    <Switch>
      {filteredRoutes.map(item => (
        <Route
          key={item.id}
          exact
          path={item.path}
          render={props => (
            <DefaultLayout
              {...props}
              navigation={NAVIGATION}
              title={item.title}
            >
              <item.component {...props} />
            </DefaultLayout>
          )}
        />
      ))}
      <Redirect exact from="/" to={PRIVATE_ROUTES.DASHBOARD_SCREEN.path} />
      <Route
        path="*"
        render={props => (
          <DefaultLayout {...props} navigation={NAVIGATION}>
            <ErrorScreen status={ClientErrors.NOT_FOUND} />
          </DefaultLayout>
        )}
      />
    </Switch>
  );
};

export default memo(Router);
