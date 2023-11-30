"use client";
import Link from "next/link";
import React, { useState } from "react";

import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { deleteListing } from "@/lib/firebase/firestore";
import { Button } from "antd";

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
  const router = useRouter();
  const [loading, setIsLoading] = useState(false);
  const deleteDocument = async () => {
    setIsLoading(true);
    try {
      await deleteListing(id);

      router.refresh("/dashboard/listings");
      setIsLoading(false);
    } catch (e) {
      throw new Error("Error in downloading!");
    }

    setIsLoading(false);
  };
  return (
    // <button onClick={deleteDocument}>
    //   <DeleteOutlined style={{ color: "#42A554", fontSize: "22px" }} />
    // </button>

    <Button
      shape="circle"
      icon={<DeleteOutlined />}
      loading={loading}
      onClick={deleteDocument}
    ></Button>
  );
};
