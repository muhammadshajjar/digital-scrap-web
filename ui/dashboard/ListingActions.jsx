"use client";
import Link from "next/link";
import React from "react";

import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

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
  return (
    <button>
      <DeleteOutlined style={{ color: "#42A554", fontSize: "22px" }} />
    </button>
  );
};
