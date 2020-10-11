import DashboardScreen from "DashboardScreen/DashboardScreen";
import { IMenuItemType } from "types/routerType";

/**
 * Dashboard Screen
 */

export const DASHBOARD_SCREEN: IMenuItemType = {
  id: "dashboard",
  path: "/dashboard",
  component: DashboardScreen,
  title: "Dashboard",
  icon: "appstore"
};
