import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import {
  Layout,
  Menu,
  Avatar,
  Button,
  List,
  Mentions,
  Row,
  Col,
  Input,
} from "antd";
import {
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import style from "./layout.module.scss";
import { AppIcons } from "./AppIcons";
import Modal from "./group/screens/Modal";
import { useAppDispatch } from "../../app/hooks";
import { getMyGroup } from "./group/redux/getMy-groups";
import Title from "antd/lib/typography/Title";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { TextArea } = Input;

const newData = [
  "Frontend Discussion",
  "Backend Discussion",
  "Official Documents",
  "Chitchat Group",
  "Financial Documents",
];

export default function MainLayout({ children }: any) {
  const dispatch = useAppDispatch();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [myGroups, setMyGroups] = useState([]);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const getGroups = async () => {
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjBkOTUxYzU3ZDEyYTIwMDE1ZTgxYWFkIiwiZW1haWwiOiJzaGltdWxwYXRvQGdtYWlsLmNvbSIsIm5hbWUiOiJTaGltdWwgSGFzc2FuIiwicm9sZXMiOltdLCJpYXQiOjE2MjU4OTQ4Mjl9.XSx_XCyIu7goa-CjOqS7tdWWwneh-LaKwfSfzABPuaY";
    const data: any = {
      token,
    };
    const res = await dispatch(getMyGroup(data));
    const groups = res.payload.filter((d: any) => d.meta !== null);
    setMyGroups(groups);

    console.log(res.payload.filter((d: any) => d.meta !== null));
  };
  useEffect(() => {
    getGroups();
  }, []);

  return (
    <Layout>
      <Sider
        width="350"
        // breakpoint="lg"
        // collapsedWidth="0"
        // onBreakpoint={(broken) => {
        //   console.log(broken);
        // }}
        // onCollapse={(collapsed, type) => {
        //   console.log(collapsed, type);
        // }}
        style={{ minWidth: "30vw !important" }}
      >
        {/* <div className="logo" />
        <div className={style.chatSider}>
          <div className={style.chatLeftHeader}>
            <Avatar
              className={style.chatAvater}
              size="default"
              icon={<UserOutlined />}
              shape="square"
            />
            <h4 className={style.chatUserName}>Shimul Hassan</h4>
          </div>
          <div>
            {AppIcons.CaretDownOutlined}
            <span style={{ color: "#fff" }}>Groups</span>
            <Button
              type="link"
              icon={AppIcons.PlusOutlined}
              onClick={() => openModal()}
            ></Button>
          </div>
          <div className={style.chatGroupList}>
            <List
              dataSource={myGroups}
              renderItem={(item: any) => (
                <List.Item>
                  <div>
                    {AppIcons.LockOutlined}
                    <span style={{ color: "#fff" }}>{item.meta.name}</span>
                    <span className={style.chatMessageCount}>18</span>
                  </div>
                </List.Item>
              )}
            />
          </div>
        </div> */}
        <div className={`${style.chatMain} ${style.chatMainFullscreen}`}>
          <Col span={8} className={style.chatLeft}>
            <Row className={style.chatLeftHeader}>
              <Avatar size={50} icon="user" className={style.chatLeftAvatar} />

              <Col className={style.chatLeftName}>
                <Title level={4} className={style.chatLeftTitle}>
                  Mamun Khandaker
                </Title>
                <Col span={24} className={style.chatStatus}>
                  <span
                    className={
                      style.chatStatusDot + " " + style.chatStatusDotBusy
                    }
                  ></span>
                  <span className={style.chatStatusText}>
                    Busy
                    {AppIcons.CaretDownOutlined}
                  </span>
                </Col>
              </Col>
            </Row>

            <Row className={style.chatLeftDetails}>
              <Title level={4} className={style.chatLeftDetailsHeader}>
                {AppIcons.CaretDownOutlined}
                <span className={style.chatLeftDetailsHeaderText}>
                  Direct Messages
                </span>
                <Button type="link" icon={AppIcons.PlusOutlined}></Button>
              </Title>

              {/* <Row className={style.chatNameList}>
                <List
                  dataSource={data}
                  renderItem={(item) => (
                    <List.Item>
                      <Link to="/">
                        {item}
                        <span className={styles.chatMessageCount}>5</span>
                      </Link>
                    </List.Item>
                  )}
                />
              </Row> */}

              <Row
                className={
                  style.chatLeftDetailsHeader +
                  " " +
                  style.chatLeftDetailsHeaderLink
                }
              >
                <Link to="/">
                  {AppIcons.MessageOutlined}
                  <span className={style.chatLeftDetailsHeaderText}>
                    Threads
                  </span>
                </Link>
              </Row>

              <Row
                className={
                  style.chatLeftDetailsHeader +
                  " " +
                  style.chatLeftDetailsHeaderLink
                }
              >
                <Link to="/">
                  {AppIcons.EditOutlined}
                  <span className={style.chatLeftDetailsHeaderText}>Draft</span>
                </Link>
              </Row>

              <Row
                className={
                  style.chatLeftDetailsHeader +
                  " " +
                  style.chatLeftDetailsHeaderLink
                }
              >
                <Link to="/">
                  {AppIcons.CaretDownOutlined}
                  <span className={style.chatLeftDetailsHeaderText}>
                    Groups
                  </span>
                  <Button type="link" icon={AppIcons.PlusOutlined}></Button>
                </Link>
              </Row>

              <Row className={style.chatGroupList}>
                <List
                  dataSource={newData}
                  renderItem={(item) => (
                    <List.Item>
                      <Link to="/">
                        {AppIcons.LockOutlined}
                        {item}
                        <span className={style.chatMessageCount}>18</span>
                      </Link>
                    </List.Item>
                  )}
                />
              </Row>
            </Row>
          </Col>
        </div>
      </Sider>
      <Layout>
        <Header
          className="site-layout-sub-header-background"
          style={{ padding: 0 }}
        />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: "80vh" }}
          ></div>
          <Row className={style.chatComposePanel}>
            <form style={{ width: "100%" }}>
              <Col className={style.chatCompose}>
                <TextArea className={style.textArea} rows={4} />
                <Button>Send</Button>
              </Col>

              <Col className={style.chatComposeActions}>
                <Col className={style.chatComposeActionsEditor}>
                  Editor buttons
                </Col>

                <Col className={style.chatComposeActionsAttachments}>
                  <Button type="link" icon={AppIcons.LinkOutlined}></Button>

                  <Button type="link" icon={AppIcons.LikeFilled}></Button>

                  <Button type="link" icon={AppIcons.CameraFilled}></Button>

                  <Button type="link" icon={AppIcons.UploadOutlined}></Button>
                </Col>
              </Col>
            </form>
          </Row>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
      <Modal
        style={style}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        handleGroupModal={setIsOpen}
      />
    </Layout>
  );
}

const Data = () => {
  const newData = [
    "Frontend Discussion",
    "Backend Discussion",
    "Official Documents",
    "Chitchat Group",
    "Financial Documents",
  ];
  return (
    <>
      {newData.map((data) => (
        <Menu.Item key={data}>{data}</Menu.Item>
      ))}
    </>
  );
};
