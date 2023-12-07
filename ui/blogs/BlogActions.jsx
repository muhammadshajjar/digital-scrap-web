"use client";
import Link from "next/link";
import React from "react";

import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

import { Button, notification } from "antd";

import { useTransition } from "react";
import { deleteBlogAction } from "@/lib/serverActions";

export const UpdateBlog = ({ id }) => {
  return (
    <Link href={`/dashboard/blogs/${id}/edit`}>
      <EditOutlined
        style={{ color: "#42A554", fontSize: "22px", marginRight: "5px" }}
      />
    </Link>
  );
};

export const DeleteBlog = ({ id }) => {
  const [isPending, startTransition] = useTransition();

  const deleteDocument = () => {
    startTransition(async () => {
      const result = await deleteBlogAction(id);
      if (result?.error) {
        console.error(result.error);
        notification.error({ message: result?.error });
      } else {
        notification.success({
          message: "Blog Deleted Successfully",
        });
      }
    });
  };

  return (
    <Button
      shape="circle"
      icon={<DeleteOutlined />}
      onClick={deleteDocument}
      loading={isPending}
    ></Button>
  );
};
