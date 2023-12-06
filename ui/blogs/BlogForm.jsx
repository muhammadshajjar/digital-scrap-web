"use client";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";
import { useState } from "react";
import MarkdownPreview from "@uiw/react-markdown-preview";
import "@uiw/react-markdown-preview/markdown.css";
import { addNewBlogPost } from "@/lib/serverActions";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

import { UploadOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Upload, notification } from "antd";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "@/lib/firebase/config";
import { useTransition } from "react";
const BlogForm = () => {
  const [value, setValue] = useState("");
  const [isPending, startTransition] = useTransition();

  const onFinish = async (values) => {
    console.log("This is test!.");
    console.log(values);
    if (values?.thumbnailpicture?.event) {
      console.error("Picture not uploaded yet!");
      notification.error({ message: "Picture not uploaded yet!" });
      return;
    }

    const uploadedFiles = values.thumbnailpicture?.fileList?.map((file) =>
      file.response ? file.response : file
    );

    const newBlogPostData = {
      title: values.title,
      breifintro: values.breifintro,
      content: values.content,
      thumbnail: uploadedFiles,
    };

    startTransition(async () => {
      const result = await addNewBlogPost(newBlogPostData);
      if (result?.error) {
        console.error("Something went wrong!");
        notification.error({ message: result?.error });
      } else {
        notification.success({ message: "Blog created successfully!" });
      }
    });
  };
  return (
    <Form
      //   initialValues={listingData}
      name="basic"
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
        label="Breif Intro"
        name="breifintro"
        rules={[
          {
            required: true,
            message: "Please fill out the Breif Intro!",
          },
        ]}
        className="w-[48%]"
      >
        <Input
          size="large"
          placeholder="It should between 20-22 words that describe the blog  "
        />
      </Form.Item>

      <Form.Item
        label="Content"
        name="content"
        rules={[
          {
            required: true,
            message: "Please fill out the content !",
          },
        ]}
        className="w-[100%]"
      >
        <div data-color-mode="light">
          <MDEditor
            value={value}
            onChange={setValue}
            enableScroll={true}
            height={500}
          />
        </div>
      </Form.Item>
      <Form.Item
        name="thumbnailpicture"
        label="Thumbnail Picture"
        rules={[
          ({ getFieldValue }) => ({
            validator(_, value) {
              const fileList = getFieldValue("thumbnailpicture");

              if (
                (fileList && fileList.length === 1) ||
                (fileList.fileList && fileList.fileList.length === 1)
              ) {
                return Promise.resolve();
              }

              return Promise.reject("Please upload exactly one picture!");
            },
          }),
        ]}
        className="w-[100%]"
      >
        <Upload
          //   defaultFileList={listingData?.pictures}
          name="logo"
          listType="picture"
          size="large"
          accept=".png, .jpeg"
          maxCount={1}
          customRequest={async ({ onError, onSuccess, file, onProgress }) => {
            const imagesRef = ref(storage, `blogs/${file.name}`);
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
                notification.error({
                  message: error,
                });
              },
              async () => {
                try {
                  console.log("Image uploaded Successfully");
                  const downloadURL = await getDownloadURL(imagesRef);
                  const picutureObj = {
                    uid: file.uid,
                    name: file.name,
                    status: "done",
                    url: downloadURL,
                  };
                  onSuccess(picutureObj);
                  notification.success({
                    message: "Picture Uploaded Successfully",
                  });
                } catch (e) {
                  console.error("Error getting download URL:", e);
                  notification.error({
                    message: e,
                  });
                }
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
          {"Create"}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default BlogForm;
