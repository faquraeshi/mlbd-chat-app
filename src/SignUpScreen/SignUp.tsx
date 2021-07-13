import React, { memo } from "react";
import { Typography, Form, Input, Button, Checkbox, Anchor } from "antd";
import styles from "../../src/index.scss";

const { Title } = Typography;
const { Link } = Anchor;

const SignUpScreen = () => {
  return (
    <>
      <Title level={2}>Create a free account</Title>

      <Form
        name="signup"
        layout="vertical"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 8 }}
        initialValues={{ remember: true }}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Create your username!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please input your E-mail!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Generate a password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          name="confirm"
          label="Confirm Password"
          dependencies={["password"]}
          hasFeedback
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  new Error("The two passwords that you entered do not match!")
                );
              },
            }),
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item name="remember" valuePropName="unchecked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Signup
          </Button>
        </Form.Item>
      </Form>

      <Anchor affix={false}>
        Already have an account? Then,
        <Link href="/login" title="Sign in" className={styles.chInlineFlex} />
      </Anchor>
    </>
  );
};

export default memo(SignUpScreen);
