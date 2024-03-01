"use client";
import React, { useState } from "react";
import { Table, Modal, Dropdown, Image, Spin } from "antd";
import { IoMdMore } from "react-icons/io";

const items = [
  {
    key: "1",
    label: "Approve",
  },
  {
    key: "2",
    label: "Reject",
  },
];
const ProfilesTable = ({ profilesData }) => {
  const [previewImage, setPreviewImage] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Phone number",
      dataIndex: "number",
      key: "number",
    },

    {
      title: "Photo ID",
      dataIndex: "photoId",
      key: "photoId",
      render: (_, record) => (
        <a onClick={() => handlePreviewImage(record?.photoId)}>Preview</a>
      ),
    },
    {
      title: "CNIC-Front",
      dataIndex: "cnicfront",
      key: "cnicfront",
      render: (_, record) => (
        <a onClick={() => handlePreviewImage(record?.cnicfront)}>Preview</a>
      ),
    },
    {
      title: "CNIC-Back",
      dataIndex: "cnicback",
      key: "cnicback",
      render: (_, record) => (
        <a onClick={() => handlePreviewImage(record?.cnicback)}>Preview</a>
      ),
    },
    {
      title: "Vehical Photo",
      dataIndex: "vehicalphoto",
      key: "vehicalphoto",
      render: (_, record) => (
        <a onClick={() => handlePreviewImage(record?.vehicalphoto)}>Preview</a>
      ),
    },
    {
      title: "Vehical Card-Front",
      dataIndex: "vehicalcardfront",
      key: "vehicalcardfront",
      render: (_, record) => (
        <a onClick={() => handlePreviewImage(record?.vehicalcardfront)}>
          Preview
        </a>
      ),
    },
    {
      title: "Vehical Card-Back",
      dataIndex: "vehicalcardback",
      key: "vehicalcardback",
      render: (_, record) => (
        <a onClick={() => handlePreviewImage(record?.vehicalcardback)}>
          Preview
        </a>
      ),
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: () => (
        <Dropdown
          menu={{
            items,
          }}
        >
          <span>
            <IoMdMore />
          </span>
        </Dropdown>
      ),
    },
  ];

  const handlePreviewImage = (imageSrc) => {
    console.log(imageSrc);
    setPreviewImage(imageSrc);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setPreviewImage(null);
    setIsModalVisible(false);
  };

  return (
    <div className="mt-14">
      <Table
        dataSource={profilesData}
        columns={columns}
        size="large"
        scroll={true}
        pagination={false}
      />

      <Modal
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
        style={{ padding: "50px" }}
        className="flex justify-center items-center"
      >
        <Image
          src={previewImage}
          height={300}
          width={300}
          placeholder={
            <div className="flex justify-center items-center bg-primary-100  h-[300px] w-[300px]">
              <Spin size="large" />
            </div>
          }
        />
      </Modal>
    </div>
  );
};

export default ProfilesTable;
