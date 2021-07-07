import { Redirect } from "react-router";
import cookie from "react-cookies";

import Login from "../features/auth/components/Login";
import MainWindow from "../features/chat-window/components/MainWindow";
import { AUTH_ACCESS_TOKEN } from "../features/auth/constants/auth.keys";
// import { IRouteProps } from "./types";
import { RenderRoutes } from ".";

const ROUTES = [
  { path: "/", key: "ROOT", exact: true, component: Login },
  {
    path: "/app",
    key: "APP",
    component: (props: any) => {
      if (!cookie.load(AUTH_ACCESS_TOKEN)) {
        alert("Login Please");
        return <Redirect to={"/"} />;
      }
      return <RenderRoutes {...props} />;
    },
    routes: [
      {
        path: "/app",
        key: "APP_ROOT",
        exact: true,
        component: MainWindow,
      },
      {
        path: "/app/chat",
        key: "APP_CHAT",
        exact: true,
        component: () => <div>chat page</div>,
      },
    ],
  },
];

export default ROUTES;
