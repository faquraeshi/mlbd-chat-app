import SignUp from "SignUpScreen/SignUp";
import { IMenuItemType } from "types/routerType";

/**
 * Ant Design Screen
 */

export const SIGN_UP_SCREEN: IMenuItemType = {
  id: "signup",
  path: "/sign-up",
  component: SignUp,
  title: "Sign Up",
};
