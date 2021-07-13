import Login from "LoginScreen/Login";
import { IMenuItemType } from "types/routerType";

/**
 * Login Screen
 */

export const LOGIN_SCREEN: IMenuItemType = {
  id: "login",
  path: "/login",
  component: Login,
  title: "Login",
};
