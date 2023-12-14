"use client";
import React from "react";
import { useRouter } from "next/navigation";

import { Button, Checkbox, Form, Input, notification } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";

const AuthForm = () => {
  const router = useRouter();
  const formSubmitHandler = (values) => {
    console.log("Received values of form: ", values);

    const { username, password } = values;

    if (username === "talha@test.com" && password === "123456") {
      router.push("/dashboard");
    } else {
      notification.error({ message: "Invalid Credentials" });
    }
  };
  return (
    <Form
      name="normal_login"
      className="login-form max-w-md"
      layout="vertical"
      initialValues={{
        remember: true,
      }}
      onFinish={formSubmitHandler}
    >
      <Form.Item
        name="username"
        label="Email"
        rules={[
          {
            required: true,
            message: "Please input your Username!",
          },
        ]}
        className="mt-1"
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="password"
        label="Password"
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

      <Form.Item name="remember" valuePropName="checked" noStyle>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item className="!mt-3">
        <Button
          type="primary"
          htmlType="submit"
          className="w-full !h-10 !font-semibold tracking-wider bg-primary-800"
        >
          Sign in
        </Button>
      </Form.Item>
    </Form>
  );
};
export default AuthForm;
