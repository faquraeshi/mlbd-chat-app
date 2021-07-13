import SignUp from "SignUpScreen/SignUp";
import { IMenuItemType } from "types/routerType";

/**
 * Sign Up Screen
 */

export const SIGN_UP_SCREEN: IMenuItemType = {
  id: "signup",
  path: "/sign-up",
  component: SignUp,
  title: "Sign Up",
};
