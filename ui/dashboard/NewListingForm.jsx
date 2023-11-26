"use client";
import React from "react";

import { UploadOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, InputNumber, Radio, Upload } from "antd";

const NewListingForm = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      initialValues={{
        remember: true,
      }}
      labelCol={{ span: 24 }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className="flex flex-wrap justify-between w-11/12 !m-auto"
    >
      <Form.Item
        className="w-[48%]"
        label="Title"
        name="title"
        rules={[
          {
            required: true,
            message: "Please enter title!",
          },
        ]}
        initialValue="TEST TITLE"
      >
        <Input size="large" placeholder="Enter Title" />
      </Form.Item>

      <Form.Item
        className="w-[48%]"
        label="Condition"
        name="condition"
        rules={[
          {
            required: true,
            message: "Please enter the condition in number!",
          },
        ]}
      >
        <InputNumber
          style={{ width: "100%" }}
          size="large"
          placeholder="Enter Condition 10/10 "
          max={10}
          min={1}
        />
      </Form.Item>

      <Form.Item
        className="w-[48%]"
        label="Price"
        name="price"
        rules={[
          {
            required: true,
            message: "Please enter price in number!",
          },
        ]}
      >
        <InputNumber
          style={{ width: "100%" }}
          size="large"
          min={1}
          placeholder="Enter Price "
        />
      </Form.Item>

      <Form.Item
        label="Type"
        name="type"
        valuePropName="checked"
        rules={[
          {
            required: true,
            message: "Please choose any type!",
          },
        ]}
        className="w-[48%]"
        initialValue="antique"
      >
        <Radio.Group size="large">
          <Radio name="scrap" value="scrap">
            Scrap
          </Radio>
          <Radio name="antique" value="antique">
            Antique
          </Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        label="Description"
        name="description"
        rules={[
          {
            required: true,
            message: "Please fill out the description!",
          },
        ]}
        className="w-[100%]"
      >
        <Input.TextArea rows={6} placeholder="Breif Description" />
      </Form.Item>

      <Form.Item
        name="pictures"
        label="Pictures"
        rules={[
          {
            required: true,
            message: "Please upload at least one picture!",
          },
        ]}
        className="w-[100%]"
      >
        <Upload
          name="logo"
          listType="picture"
          size="large"
          accept=".png, .jpeg"
          beforeUpload={() => {
            return file;
          }}
          //   customRequest={async ({ onError, onSuccess, file, onProgress }) => {
          //     console.log(file.originFileObj);
          //   }}
        >
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload>
      </Form.Item>

      <Form.Item className="w-[100%] flex justify-end ">
        <Button
          type="primary"
          htmlType="submit"
          size="large"
          className="!bg-primary-800 "
          icon={<PlusOutlined />}
        >
          Create
        </Button>
      </Form.Item>
    </Form>
  );
};

export default NewListingForm;
