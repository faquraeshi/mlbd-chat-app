import React, { memo } from "react";
import { Form, Input, Button, Checkbox, Anchor } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import styles from "../../src/index.scss";

const NormalLoginForm = () => {
  const { Link } = Anchor;

  return (
    <Form
      name="login"
      className="login-form"
      wrapperCol={{ span: 6 }}
      initialValues={{ remember: true }}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your Username!",
          },
        ]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or{" "}
        <Anchor affix={false}>
          <Link
            href="/sign-up"
            title="Register now!"
            className={styles.chInlineFlex}
          />
        </Anchor>
      </Form.Item>
    </Form>
  );
};

export default memo(NormalLoginForm);
