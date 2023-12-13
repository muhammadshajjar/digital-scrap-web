"use client";
import React, { useState } from "react";
import { Button, Modal } from "antd";
import Image from "next/image";
import Link from "next/link";

const DownloadAppModal = ({ isModalOpen, handleOk, handleCancel }) => {
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
          <Link href="#">
            <Image
              src="/images/playstore.png"
              height={10}
              width={150}
              alt="playstore"
              className="mr-3"
            />
          </Link>
          <Link href="#">
            <Image
              src="/images/appstore.png"
              height={150}
              width={150}
              alt="playstore"
            />
          </Link>
        </div>
      </Modal>
    </>
  );
};

export default DownloadAppModal;
