"use client";
import { useState, useEffect } from "react";
//MDd editor
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
import dynamic from "next/dynamic";

import { addNewBlogPost, editBlogAction } from "@/lib/serverActions";

import { UploadOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Upload, notification } from "antd";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { storage } from "@/lib/firebase/config";

import { useTransition } from "react";
import { formateDateForBlogPost } from "@/helper/utilityFunctions";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

const BlogForm = ({ blogData, id }) => {
  const [value, setValue] = useState("");
  const [isPending, startTransition] = useTransition();

  // prefill my editor for editing
  useEffect(() => {
    blogData && setValue(blogData?.content);
  }, []);

  const onFinish = async (values) => {
    if (values?.thumbnail?.event) {
      console.error("Picture not uploaded yet!");
      notification.error({ message: "Picture not uploaded yet!" });
      return;
    }

    //reason for asumption of array of files is that upload default values accept array of files.

    const uploadedFiles = values.thumbnail?.fileList?.map((file) =>
      file.response ? file.response : file
    );

    const newBlogPostData = {
      title: values.title,
      breifintro: values.breifintro,
      content: values.content,
      thumbnail: uploadedFiles,
      postDate: formateDateForBlogPost(new Date()),
    };

    startTransition(async () => {
      if (blogData) {
        const result = await editBlogAction({ ...newBlogPostData, id });
        if (result?.error) {
          console.error("Something went wrong!");
          notification.error({ message: result?.error });
        } else {
          notification.success({ message: "Blog Edited successfully!" });
        }
      } else {
        const result = await addNewBlogPost(newBlogPostData);
        if (result?.error) {
          console.error("Something went wrong!");
          notification.error({ message: result?.error });
        } else {
          notification.success({ message: "Blog created successfully!" });
        }
      }
    });
  };
  return (
    <Form
      initialValues={blogData}
      name="basic"
      labelCol={{ span: 24 }}
      onFinish={onFinish}
      autoComplete="off"
      className="flex flex-wrap justify-between w-11/12 !m-auto"
    >
      <Form.Item
        className="w-[100%]"
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
        className="w-[100%]"
      >
        <Input.TextArea
          rows={5}
          placeholder="It should between 20-22 words that describe the blog..."
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
        name="thumbnail"
        label="Thumbnail Picture"
        rules={[
          ({ getFieldValue }) => ({
            validator(_, value) {
              const fileList = getFieldValue("thumbnail");

              console.log(fileList);
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
          defaultFileList={blogData?.thumbnail}
          name="thumbnail"
          listType="picture"
          size="large"
          accept=".png, .jpeg"
          maxCount={1}
          customRequest={async ({ onError, onSuccess, file, onProgress }) => {
            const imagesRef = ref(storage, `blogs/${file.name}`);
            const uploadTask = uploadBytesResumable(imagesRef, file);

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
          {blogData ? "Edit" : "Create"}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default BlogForm;
