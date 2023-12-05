"use client";

import { useState } from "react";
import { Divider, Button, Modal, Form, Input, InputNumber } from "antd";

import CategoryBox from "@/ui/categories/CategoryBox";
import SubCategoryBox from "@/ui/categories/SubCategoryBox";

import { PlusOutlined, CloseOutlined } from "@ant-design/icons";
import { CATEGORIESDATA } from "@/lib/Categories";

const AllCategories = ({ categoriesData }) => {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Content of the modal");
  const [form] = Form.useForm();

  const [selectedCategoryId, setSelectedCategoryID] = useState(
    categoriesData[0]?.id
  );

  const categorySelectionHandler = (id) => {
    setSelectedCategoryID(id);
  };

  // Filtered category JSX

  const filtereCategoryContent = categoriesData
    .filter((category) => category.id === selectedCategoryId)[0]
    ?.subcategories.map((data) => <SubCategoryBox data={data} />);

  //Below is the code for modal and handling the category..

  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    console.log("Selected sub category ID is :" + selectedCategoryId);

    form
      .validateFields()
      .then((values) => {
        console.log("Received values:", values);
        setModalText("ADD subcategory to DB HERE..");

        // setConfirmLoading(true);
        // setTimeout(() => {
        //   setOpen(false);
        //   setConfirmLoading(false);
        // }, 2000);
      })
      .catch((errorInfo) => {
        console.log("Validation failed:", errorInfo);
      });
  };
  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  return (
    <>
      <div className="flex gap-14 flex-wrap mb-10">
        {CATEGORIESDATA.map((category) => (
          <CategoryBox
            key={category.id}
            category={category}
            onCategorySelection={categorySelectionHandler}
            selectedId={selectedCategoryId}
          />
        ))}
      </div>
      <Divider />
      <div className="flex items-center gap-10 flex-wrap mt-12">
        {filtereCategoryContent}
      </div>
      <div className=" absolute bottom-6 right-6">
        <Button
          type="primary"
          htmlType="submit"
          size="large"
          className="!bg-primary-800 "
          icon={<PlusOutlined />}
          onClick={showModal}
          // loading={isPending}
        >
          Add
        </Button>
        <Modal
          title={`Add new item `}
          open={open}
          onOk={handleOk}
          confirmLoading={confirmLoading}
          onCancel={handleCancel}
          closeIcon={<CloseOutlined />}
        >
          <Form
            name="basic"
            labelCol={{ span: 24 }}
            autoComplete="off"
            className="flex flex-wrap justify-between w-11/12 !m-auto"
            form={form} // Add this line
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
      </div>
    </>
  );
};

export default AllCategories;
