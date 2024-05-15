"use client";
import React, { useState } from "react";
import { Button, Modal } from "antd";
import Image from "next/image";
import Link from "next/link";
import DownloadForTesting from "./DownloadForTesting";


const DownloadAppModal = ({ isModalOpen, handleOk, handleCancel }) => {
  const [modalData, setModalData] = useState({
    isOpen: false,
    type: "",
  });

  const showTestingAppModal = (type) => {
    setModalData({ isOpen: true, type: type });
  };

  const handleTestingAppOk = () => {
    setModalData({ isOpen: false, type: "" });
  };

  const handleTestingAppCancel = () => {
    setModalData({ isOpen: false, type: "" });
  };

  return (
    <>
      <Modal
        title="Download Our App"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Image
          src="/images/appshowcase.png"
          height={600}
          width={600}
          alt="app show case image"
        />
        <div className="flex justify-between items-center w-2/3 m-auto">
          <div
            onClick={() => showTestingAppModal("android")}
            className="hover:cursor-pointer"
          >
            <Image
              src="/images/playstore.png"
              height={10}
              width={150}
              alt="playstore"
              className="mr-3"
            />
          </div>
          <div
            onClick={() => showTestingAppModal("ios")}
            ƒ
            className="hover:cursor-pointer"
          >
            <Image
              src="/images/appstore.png"
              height={150}
              width={150}
              alt="playstore"
            />
          </div>
        </div>
      </Modal>
      <DownloadForTesting
        isModalOpen={modalData.isOpen}
        handleOk={handleTestingAppOk}
        handleCancel={handleTestingAppCancel}
        title={
          modalData.type === "android"
            ? "Download for Android"
            : "Download for iOS"
        }
        type={modalData.type}
      />
    </>
  );
};

export default DownloadAppModal;
