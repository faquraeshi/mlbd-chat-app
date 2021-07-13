import * as DASHBOARD_ROUTES from "./private/router.dashboard";
import * as CHAT_RECORDS_ROUTES from "./private/router.chatrecords";
import * as CHAT_TYPES_ROUTES from "./private/router.chattypes";
import * as ANT_DESIGN_TYPES_ROUTES from "./private/router.antdesign";
import * as SIGN_UP_SCREEN_TYPES_ROUTES from "./private/router.signup";

/** Private Routes */
export const PRIVATE_ROUTES = {
  ...DASHBOARD_ROUTES,
  ...CHAT_RECORDS_ROUTES,
  ...CHAT_TYPES_ROUTES,
  ...ANT_DESIGN_TYPES_ROUTES,
  ...SIGN_UP_SCREEN_TYPES_ROUTES,
};

/** Side Navigation Items */
export const NAVIGATION = [
  DASHBOARD_ROUTES.DASHBOARD_SCREEN,
  CHAT_RECORDS_ROUTES.CHAT_RECORDS_SCREEN,
  CHAT_TYPES_ROUTES.CHAT_TYPES_SCREEN,
  ANT_DESIGN_TYPES_ROUTES.ANT_DESIGN_SCREEN,
  SIGN_UP_SCREEN_TYPES_ROUTES.SIGN_UP_SCREEN,
];
