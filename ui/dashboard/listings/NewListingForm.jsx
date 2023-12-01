"use client";
import React from "react";

import { UploadOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, InputNumber, Radio, Upload } from "antd";

import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "@/lib/firebase/config";

import { addNewListingAction } from "@/lib/serverActions";

import { useTransition } from "react";
const NewListingForm = () => {
  const [isPending, startTransition] = useTransition();

  const onFinish = async (values) => {
    values.pictures.fileList.forEach((file) => {
      if (file.status !== "done") {
        console.error("Pictures are not uploaded yet!");
        throw new Error("Pictures are not uploaded yet!");
      }
    });

    startTransition(async () => {
      const uploadedImages = await Promise.all(
        values.pictures.fileList.map(async (file) => {
          const downloadURL = await getDownloadURL(file.response);
          return downloadURL;
        })
      );

      const newListingData = {
        title: values.title,
        condition: values.condition,
        price: values.price,
        description: values.description,
        pictures: uploadedImages,
        type: values.type,
      };
      addNewListingAction(newListingData);
    });
  };

  return (
    <Form
      name="basic"
      initialValues={{
        remember: true,
      }}
      labelCol={{ span: 24 }}
      onFinish={onFinish}
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
          multiple
          customRequest={async ({ onError, onSuccess, file, onProgress }) => {
            const imagesRef = ref(storage, `listings/${file.name}`);
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
          loading={isPending}
        >
          Create
        </Button>
      </Form.Item>
    </Form>
  );
};

export default NewListingForm;
