"use client";
import React, { useState } from "react";
import { Table, Modal, Dropdown, Image } from "antd";
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
const ProfilesTable = () => {
  const [previewImage, setPreviewImage] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const dataSource = [
    {
      key: "1",
      name: "Muhammad Shajjar",
      number: "0321-2523296",
      photoId: "Preview",
      cnicfront: "Preview",
      cnicback: "Preview",
      vehicalphoto: "Preview",
      vehicalcardfront: "Preview",
      vehicalcardback: "Preview",
      actions: "Click",
    },
    {
      key: "2",
      name: "Imran Zafar",
      number: "0300-4939223",
      photoId: "Preview",
      cnicfront: "Preview",
      cnicback: "Preview",
      vehicalphoto: "Preview",
      vehicalcardfront: "Preview",
      vehicalcardback: "Preview",
      actions: "Click",
    },
    {
      key: "2",
      name: "Muhammad Hammad",
      number: "0311-2354334",
      photoId: "Preview",
      cnicfront: "Preview",
      cnicback: "Preview",
      vehicalphoto: "Preview",
      vehicalcardfront: "Preview",
      vehicalcardback: "Preview",
      actions: "Click",
    },
  ];

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
        <a onClick={() => handlePreviewImage("/")}>Preview</a>
      ),
    },
    {
      title: "CNIC-Front",
      dataIndex: "cnicfront",
      key: "cnicfront",
      render: (_, record) => (
        <a onClick={() => handlePreviewImage("/")}>Preview</a>
      ),
    },
    {
      title: "CNIC-Back",
      dataIndex: "cnicback",
      key: "cnicback",
      render: (_, record) => (
        <a onClick={() => handlePreviewImage("/i")}>Preview</a>
      ),
    },
    {
      title: "Vehical Photo",
      dataIndex: "vehicalphoto",
      key: "vehicalphoto",
      render: (_, record) => (
        <a onClick={() => handlePreviewImage("/")}>Preview</a>
      ),
    },
    {
      title: "Vehical Card-Front",
      dataIndex: "vehicalcardfront",
      key: "vehicalcardfront",
      render: (_, record) => (
        <a onClick={() => handlePreviewImage("/")}>Preview</a>
      ),
    },
    {
      title: "Vehical Card-Back",
      dataIndex: "vehicalcardback",
      key: "vehicalcardback",
      render: (_, record) => (
        <a onClick={() => handlePreviewImage("/")}>Preview</a>
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
        dataSource={dataSource}
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
      >
        <Image src={previewImage} fallback={"/images/appshowcase.png"} />
      </Modal>
    </div>
  );
};

export default ProfilesTable;
