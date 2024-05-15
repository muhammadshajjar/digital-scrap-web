"use client";
import React from "react";
import { Modal } from "antd";
import Image from "next/image";


const DownloadForTesting = ({
  isModalOpen,
  handleOk,
  handleCancel,
  title,
  type,
}) => {
  return (
    <>
      <Modal
        title={title}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <h2 className=" text-sm italic">
          {`Thank you for your interest in our app! We're currently in the testing
          phase and not yet available on the ${
            type == "android" ? "Play" : "App"
          } Store. However, you can still
          download and try out our app by following these steps:`}
        </h2>

        <ul className="text-sm mt-2">
          <li>
            1.Scan the QR code below using your smartphone camera or a QR code
            scanner app.
          </li>
          <li className="flex justify-center">
            <Image
              src={`/images/QR-code-${
                type == "android" ? "andriod" : "ios"
              }.png`}
              height={200}
              width={200}
              alt="app show case image"
            />
          </li>
          <li>
            {` 2. Once the QR code is scanned, you'll be redirected to Google Drive
            to download the  ${
              type == "android" ? "APK file" : "IOS simulator build"
            }`}
          </li>
          <li>
            {` 3. After downloading, install the   ${
              type == "android"
                ? "APK file on your Android device to"
                : "App on your IOS simulator to"
            } 
            start using our app.`}
          </li>
        </ul>
      </Modal>
    </>
  );
};

export default DownloadForTesting;
