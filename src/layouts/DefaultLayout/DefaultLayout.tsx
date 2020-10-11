import React, { memo, useState } from "react";
import { Layout, Typography } from "antd";
import { RouteComponentProps } from "react-router-dom";
import { IMenuItemType } from "types/routerType";
import Navigation from "./components/Navigation/Navigation";
import styles from "./DefaultLayout.module.scss";
import Logo from "ui/logo.svg";
import LogoSmall from "ui/logo.svg";

const { Sider, Content, Header } = Layout;
const { Title } = Typography;

interface IProps extends RouteComponentProps {
  children: React.ReactNode;
  navigation: IMenuItemType[];
  title?: string;
}

const DefaultLayout = ({ children, navigation, title, ...rest }: IProps) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className={styles.layout}>
      <Sider
        className={styles.sider}
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
        collapsedWidth="95"
        width="280"
      >
        <img src={Logo} alt="Chr. Hansen" className={styles.logo} />
        <img src={LogoSmall} alt="Chr. Hansen" className={styles.logoSmall} />
        <Navigation navigation={navigation} {...rest} />
      </Sider>
      <Layout>
        <Header className={styles.header}>
          <Title level={1} className={styles.pageTitle}>
            {title}
          </Title>
        </Header>
        <Content className={styles.content}>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default memo(DefaultLayout);
