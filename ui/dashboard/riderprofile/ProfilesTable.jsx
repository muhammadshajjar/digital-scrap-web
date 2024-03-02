"use client";
import React, { useState } from "react";
import { Table, Modal, Dropdown, Image, Spin, notification } from "antd";
import { IoMdMore } from "react-icons/io";
// import { riderProfileAction } from "@/lib/firebase/firestore";

import { useTransition } from "react";
import { riderProfileAction } from "@/lib/serverActions";

const ProfilesTable = ({ profilesData }) => {
  const [previewImage, setPreviewImage] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isPending, startTransition] = useTransition();

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
      title: "Status",
      dataIndex: "status",
      key: "status",
    },

    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (text, record) => (
        <Dropdown
          menu={{
            items: [
              {
                key: "1",
                label: (
                  <button onClick={() => approveRecordHandler(record?.key)}>
                    Approve
                  </button>
                ),
              },
              {
                key: "2",
                label: (
                  <button onClick={() => rejectRecordHandler(record?.key)}>
                    Reject
                  </button>
                ),
              },
            ],
          }}
        >
          <span>
            <IoMdMore />
          </span>
        </Dropdown>
      ),
    },
  ];

  const approveRecordHandler = async (id) => {
    startTransition(async () => {
      const result = await riderProfileAction(id, "Approved");
      if (result?.error) {
        notification.error({ message: result?.error });
      } else {
        notification.success({
          message: "Rider Profile Approved Successfully",
        });
      }
    });
  };
  const rejectRecordHandler = (id) => {
    startTransition(async () => {
      const result = await riderProfileAction(id, "Rejected");
      if (result?.error) {
        notification.error({ message: result?.error });
      } else {
        notification.success({
          message: "Rider Profile Rejected Successfully",
        });
      }
    });
  };
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
    <div className="mt-14 relative">
      {isPending && (
        <div className="absolute inset-0 flex justify-center items-center bg-white bg-opacity-75 z-10">
          <Spin size="large" />
        </div>
      )}
      <div className={isPending ? "opacity-50" : ""}>
        <Table
          dataSource={profilesData}
          columns={columns}
          size="large"
          scroll={true}
          pagination={false}
        />
      </div>

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
