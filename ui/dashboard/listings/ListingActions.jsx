"use client";
import Link from "next/link";
import React from "react";

import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

import { Button } from "antd";

import { useTransition } from "react";
import { deleteListingAction } from "@/lib/serverActions";

export const UpdateListing = ({ id }) => {
  return (
    <Link href={`/dashboard/listings/${id}/edit`}>
      <EditOutlined
        style={{ color: "#42A554", fontSize: "22px", marginRight: "5px" }}
      />
    </Link>
  );
};

export const DeleteListing = ({ id }) => {
  const [isPending, startTransition] = useTransition();
  const deleteDocument = () => {
    startTransition(() => {
      deleteListingAction(id);
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
