"use client";
import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { Modal, Form, Input, notification } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { assignAreaToRider } from "@/lib/serverActions";
import { useTransition } from "react";

const AllotAreas = ({ profileData }) => {
  const [form] = Form.useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const submitCoordinates = async () => {
    try {
      const values = await form.validateFields();
      const trimmedInput = values?.coordinates.trim();
      const assignedArea = {
        areaname: values?.name,
        coordinates: trimmedInput,
      };

      startTransition(async () => {
        const result = await assignAreaToRider(profileData?.key, assignedArea);
        if (result?.error) {
          console.error(result);
          notification.error({ message: result?.error });
        } else {
          notification.success({ message: "Area Assigned Successfully" });
          setIsModalOpen(false);
        }
      });
      form.resetFields();
    } catch (errorInfo) {
      console.error("Validation failed:", errorInfo);
      notification.error({ message: errorInfo });
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="bg-secondary-200 pl-3 pr-12 py-3 rounded-md flex items-center gap-4 border-b-4 border-primary-800 w-[280px]">
        <div className="h-12 w-12 rounded-full bg-primary-800 cursor-pointer flex justify-center items-center">
          <FaRegUser className="text-slate-50 text-lg" />
        </div>
        <div>
          <h3>{profileData?.name}</h3>
          <p>{profileData?.number}</p>
          {profileData?.assignArea?.areaname !== " " ? (
            <p>Area Assigned</p>
          ) : (
            <button onClick={showModal}>
              <p className="underline hover:text-primary-800">
                Click to Assign!
              </p>
            </button>
          )}
        </div>
      </div>
      <Modal
        title="Collect Coordinates"
        closeIcon={<CloseOutlined />}
        open={isModalOpen}
        onOk={submitCoordinates}
        onCancel={handleCancel}
        okButtonProps={{ className: "!bg-primary-800" }}
        cancelButtonProps={{ className: "!hidden" }}
        okText="Done"
        confirmLoading={isPending}
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
                message: "Please enter area  name!",
              },
            ]}
          >
            <Input size="large" placeholder="Enter area name" />
          </Form.Item>
          <Form.Item
            className="w-[100%]"
            label="Coordinates"
            name="coordinates"
            rules={[
              {
                required: true,
                message: "Please enter coordinates",
              },
            ]}
          >
            <Input.TextArea
              size="large"
              placeholder="Enter Coordinates"
              style={{ height: "150px" }}
            />
          </Form.Item>
          <a
            href="https://geojson.io/#map=11.77/33.614/72.9474"
            className="text-primary-800"
          >
            Choose on map
          </a>
        </Form>
      </Modal>
    </>
  );
};

export default AllotAreas;
