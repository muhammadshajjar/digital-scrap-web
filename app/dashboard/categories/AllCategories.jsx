"use client";
import { useState } from "react";
import { Divider, Button, Form, notification } from "antd";

import CategoryBox from "@/ui/dashboard/categories/CategoryBox";
import SubCategoryBox from "@/ui/dashboard/categories/SubCategoryBox";
import NewCategoryModal from "@/ui/dashboard/categories/NewCategoryModal";
import { CATEGORIESDATA } from "@/lib/Categories";

import { PlusOutlined } from "@ant-design/icons";

import { addNewSubCategory } from "@/lib/serverActions";

import { useTransition } from "react";

const AllCategories = ({ subCategoriesData }) => {
  const [open, setOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [form] = Form.useForm();

  const [selectedCategoryId, setSelectedCategoryID] = useState(
    subCategoriesData[0]?.id
  );

  const categorySelectionHandler = (id) => {
    setSelectedCategoryID(id);
  };

  // Filtered category JSX
  const filtereCategoryContent = subCategoriesData
    .filter((category) => category.id === selectedCategoryId)[0]
    ?.subcategories.map((data) => (
      <SubCategoryBox data={data} key={Math.random().toString()} />
    ));

  //Below is the code for modal and handling the new category.

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = async () => {
    try {
      const values = await form.validateFields();

      startTransition(async () => {
        const result = await addNewSubCategory(values, selectedCategoryId);
        if (result?.error) {
          console.error(result);
          notification.error({ message: result?.error });
        } else {
          notification.success({ message: "Sub Category Added Successfully" });
          setOpen(false);
        }
      });
      form.resetFields();
    } catch (errorInfo) {
      console.error("Validation failed:", errorInfo);
      notification.error({ message: errorInfo });
    }
  };
  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="flex gap-14 flex-wrap mb-10 mt-8">
        {CATEGORIESDATA.map(
          (category) =>
            category.id !== "all" && (
              <CategoryBox
                key={category.id}
                category={category}
                onCategorySelection={categorySelectionHandler}
                selectedId={selectedCategoryId}
              />
            )
        )}
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
        >
          Add
        </Button>
        <NewCategoryModal
          onOpen={open}
          onHandleOk={handleOk}
          onHandleCancel={handleCancel}
          isPending={isPending}
          form={form}
        />
      </div>
    </>
  );
};

export default AllCategories;
