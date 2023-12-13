"use client";
import React, { useState } from "react";
import { Button } from "antd";
import DownloadAppModal from "./DownloadAppModal";
const HeroAction = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button
        type="primary"
        shape="round"
        size="large"
        className="!bg-primary-800 !h-12 mb-8"
        onClick={showModal}
      >
        Download the app
      </Button>
      <DownloadAppModal
        isModalOpen={isModalOpen}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
    </>
  );
};

export default HeroAction;
