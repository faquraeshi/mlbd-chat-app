import React, { memo, useState } from "react";
import { Layout, Menu, Breadcrumb, Button, Input, Modal } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import TextArea from "antd/lib/input/TextArea";
import { Formik, Field } from "formik";
// import Select from "react-select";

import "./Dashboard.style.css";
import { SelectField } from "./SelectMember";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const options = [
  {
    label: "Option 1",
    value: "option-1",
  },
  {
    label: "Option 2",
    value: "option-2",
  },
  {
    label: "Option 3",
    value: "option-3",
  },
];

const Editor = ({ onChange, onSubmit, submitting, value }: any) => (
  <div style={{ marginTop: "40%" }}>
    <TextArea rows={4} onChange={onChange} value={value} />

    <Button
      htmlType="submit"
      loading={submitting}
      onClick={onSubmit}
      type="primary"
    >
      reply
    </Button>
  </div>
);

export default function Dashboard() {
  const [collapsed, setCollapsed] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [value, setValue] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const editorChange = (e: any) => {
    setValue(e.target.value);
  };

  const editorSubmit = () => {
    if (!value) {
      return;
    }
    setSubmitting(true);
  };

  const handleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  function handleSelectChange(value: any) {
    console.log(`selected ${value}`);
  }

  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={handleCollapsed}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={["9"]} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            Option 1
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Option 2
          </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="User">
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
            <Menu.Item key="6" onClick={showModal}>
              Create Team
            </Menu.Item>
            {/* <Menu.Item key="8">Team 2</Menu.Item> */}
          </SubMenu>
          <Menu.Item key="9" icon={<FileOutlined />}>
            Chat
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <Editor
              onChange={editorChange}
              onSubmit={editorSubmit}
              submitting={submitting}
              value={value}
            />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
        <Modal
          title="Create Group"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={handleSubmit}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              setFieldValue,
            }) => (
              <form onSubmit={handleSubmit}>
                <Input
                  type="text"
                  name="groupName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Group Name"
                />
                {/* {errors.groupName && touched.email && errors.email} */}
                <SelectField
                  id="memberSelect"
                  name="memberSelect"
                  placeholder="Select Member"
                  options={options}
                  value={value}
                  onChange={setFieldValue}
                  //   onBlur={this.handleBlur}
                  // touched={touched.memberSelect}
                  //   error={error}
                  isMulti={true}
                  //   isDisabled={isDisabled}
                  isClearable={true}
                  backspaceRemovesValue={true}
                  components={{ ClearIndicator: null }}
                />

                {/* {errors.password && touched.password && errors.password} */}
                <Button htmlType="submit" disabled={isSubmitting}>
                  Submit
                </Button>
              </form>
            )}
          </Formik>
        </Modal>
      </Layout>
    </Layout>
  );
}
