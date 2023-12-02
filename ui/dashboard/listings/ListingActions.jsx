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
    startTransition(async () => {
      const result = await deleteListingAction(id);
      if (result?.error) {
        console.log(result.error);
      } else {
        console.log("Listing deleted Successfully");
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
