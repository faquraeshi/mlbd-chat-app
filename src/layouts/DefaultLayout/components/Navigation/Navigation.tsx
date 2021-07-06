import React, { memo } from "react";
import { Menu } from "antd";
import { Link, RouteComponentProps } from "react-router-dom";
import { IMenuItemType } from "types/routerType";
import styles from "./Navigation.module.scss";

const { SubMenu, Item: MenuItem } = Menu;

interface IProps extends RouteComponentProps {
  /** List of navigation items */
  navigation: IMenuItemType[];
}

const getSubMenuOpenKey = (location: any) => {
  //get submenu key from location path
  return location.match(/[/]\w*/)[0];
};

const getMenuOpenKey = (path: any) => {
  const location = path.match(/^\/.[^/]+\/.[^/]+/g);
  return location == null ? path : location[0];
};

const Navigation = ({ location, navigation }: IProps) => {
  return (
    <Menu
      mode="inline"
      selectedKeys={[getMenuOpenKey(location.pathname)]}
      defaultOpenKeys={[getSubMenuOpenKey(location.pathname)]}
      className={styles.navigation}
    >
      {navigation.map(item =>
        item.subMenuItems ? (
          <SubMenu
            key={item.path}
            title={
              <span>
                <span>{item.title}</span>
              </span>
            }
          >
            {item.subMenuItems.map(subItem => (
              <MenuItem key={getMenuOpenKey(subItem.path)}>
                <Link to={subItem.path}>
                  <span>{subItem.title}</span>
                </Link>
              </MenuItem>
            ))}
          </SubMenu>
        ) : (
          <MenuItem key={item.path}>
            <Link to={item.path}>
              <span>{item.title}</span>
            </Link>
          </MenuItem>
        )
      )}
    </Menu>
  );
};

export default memo(Navigation);
