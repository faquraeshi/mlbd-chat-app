import StaticScreen from "StaticUi/StaticUi";
import { IMenuItemType } from "types/routerType";

/**
 * Static UI Screen
 */

export const STATIC_SCREEN: IMenuItemType = {
  id: "static",
  path: "/static/ui",
  component: StaticScreen,
  title: "Static",
  icon: "appstore",
};
