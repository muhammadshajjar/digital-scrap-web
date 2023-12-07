import React from "react";

import { Modal, Form, Input, InputNumber } from "antd";
import { CloseOutlined } from "@ant-design/icons";
const NewCategoryModal = ({
  onOpen,
  onHandleOk,
  isPending,
  onHandleCancel,
  form,
}) => {
  return (
    <Modal
      title={`Add new item `}
      open={onOpen}
      onOk={onHandleOk}
      confirmLoading={isPending}
      onCancel={onHandleCancel}
      closeIcon={<CloseOutlined />}
      okButtonProps={{ className: "!bg-primary-800" }}
      cancelButtonProps={{ className: "!hidden" }}
      okText="ADD"
    >
      <Form
        name="basic"
        labelCol={{ span: 24 }}
        autoComplete="off"
        className="flex flex-wrap justify-between w-11/12 !m-auto"
        form={form}
      >
        <Form.Item
          className="w-[100%]"
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please enter name!",
            },
          ]}
        >
          <Input size="large" placeholder="Enter name" />
        </Form.Item>

        <Form.Item
          className="w-[100%]"
          label="Price"
          name="price"
          rules={[
            {
              required: true,
              message: "Please enter the price!",
            },
          ]}
        >
          <InputNumber
            style={{ width: "100%" }}
            size="large"
            placeholder="Enter Pirce /kg "
            min={1}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default NewCategoryModal;
