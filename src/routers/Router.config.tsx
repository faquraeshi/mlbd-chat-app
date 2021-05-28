import * as DASHBOARD_ROUTES from "./private/router.dashboard";
import * as CHAT_RECORDS_ROUTES from "./private/router.chatrecords";
import * as CHAT_TYPES_ROUTES from "./private/router.chattypes";
import * as STATIC_TYPES_ROUTER from "./private/router.staticui";

/** Private Routes */
export const PRIVATE_ROUTES = {
  ...DASHBOARD_ROUTES,
  ...CHAT_RECORDS_ROUTES,
  ...CHAT_TYPES_ROUTES,
  ...STATIC_TYPES_ROUTER,
};

/** Side Navigation Items */
export const NAVIGATION = [
  DASHBOARD_ROUTES.DASHBOARD_SCREEN,
  CHAT_RECORDS_ROUTES.CHAT_RECORDS_SCREEN,
  CHAT_TYPES_ROUTES.CHAT_TYPES_SCREEN,
  STATIC_TYPES_ROUTER.STATIC_SCREEN,
];
