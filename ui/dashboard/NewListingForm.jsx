"use client";
import React, { useState } from "react";

import { UploadOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, InputNumber, Radio, Upload } from "antd";
import { addNewListing } from "@/lib/firebase/firestore";

import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "@/lib/firebase/config";

const NewListingForm = () => {
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const onFinish = async (values) => {
    console.log("Success:", values);

    // const url = await getDownloadURL(values.pictures.file.response);
    // console.log(url);

    // try {
    //   setIsLoading(true);
    //   await addNewListing(values);
    //   setIsLoading(false);
    // } catch (e) {
    //   console.log(e);
    // }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      initialValues={{
        remember: true,
      }}
      labelCol={{ span: 24 }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className="flex flex-wrap justify-between w-11/12 !m-auto"
    >
      <Form.Item
        className="w-[48%]"
        label="Title"
        name="title"
        rules={[
          {
            required: true,
            message: "Please enter title!",
          },
        ]}
        initialValue="TEST TITLE"
      >
        <Input size="large" placeholder="Enter Title" />
      </Form.Item>

      <Form.Item
        className="w-[48%]"
        label="Condition"
        name="condition"
        rules={[
          {
            required: true,
            message: "Please enter the condition in number!",
          },
        ]}
      >
        <InputNumber
          style={{ width: "100%" }}
          size="large"
          placeholder="Enter Condition 10/10 "
          max={10}
          min={1}
        />
      </Form.Item>

      <Form.Item
        className="w-[48%]"
        label="Price"
        name="price"
        rules={[
          {
            required: true,
            message: "Please enter price in number!",
          },
        ]}
      >
        <InputNumber
          style={{ width: "100%" }}
          size="large"
          min={1}
          placeholder="Enter Price "
        />
      </Form.Item>

      <Form.Item
        label="Type"
        name="type"
        valuePropName="checked"
        rules={[
          {
            required: true,
            message: "Please choose any type!",
          },
        ]}
        className="w-[48%]"
      >
        <Radio.Group size="large">
          <Radio name="scrap" value="scrap">
            Scrap
          </Radio>
          <Radio name="antique" value="antique">
            Antique
          </Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item
        label="Description"
        name="description"
        rules={[
          {
            required: true,
            message: "Please fill out the description!",
          },
        ]}
        className="w-[100%]"
      >
        <Input.TextArea rows={6} placeholder="Breif Description" />
      </Form.Item>

      <Form.Item
        name="pictures"
        label="Pictures"
        rules={[
          {
            required: true,
            message: "Please upload at least one picture!",
          },
        ]}
        className="w-[100%]"
      >
        <Upload
          name="logo"
          listType="picture"
          size="large"
          accept=".png, .jpeg"
          // beforeUpload={() => {
          //   return file;
          // }}
          customRequest={async ({ onError, onSuccess, file, onProgress }) => {
            console.log(file);

            const imagesRef = ref(storage, `images/${file.name}`);
            const uploadTask = uploadBytesResumable(imagesRef, file);
            console.log("Uploaded a blob or file!");

            uploadTask.on(
              "state_changed",
              (snapshot) => {
                onProgress({
                  percent:
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
                });
              },
              (error) => {
                // Handle unsuccessful uploads
                onError(error);
              },
              () => {
                onSuccess(imagesRef);
              }
            );
          }}
        >
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload>
      </Form.Item>

      <Form.Item className="w-[100%] flex justify-end ">
        <Button
          type="primary"
          htmlType="submit"
          size="large"
          className="!bg-primary-800 "
          icon={<PlusOutlined />}
        >
          {!loading ? "Create" : "...."}
        </Button>
      </Form.Item>
      <Form.Item
        className="w-[100%] flex justify-endn "
        name="files"
        label="files"
      >
        <input type="file" />
      </Form.Item>
    </Form>
  );
};

export default NewListingForm;
