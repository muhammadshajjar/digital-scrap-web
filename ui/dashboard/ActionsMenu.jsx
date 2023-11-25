"use client";
import React from "react";
import Link from "next/link";

import { Dropdown } from "antd";

import { GrUserAdmin } from "react-icons/gr";
import { CiLogout } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";

import { redirect } from "next/navigation";
const ActionsMenu = () => {
  const USERITEMS = [
    {
      key: "1",
      label: <Link href="#">Your Profile</Link>,
      icon: <GrUserAdmin />,
    },
    {
      key: "2",
      //   label: (
      //     <button
      //       onClick={() => {
      //         console.log("Clicked on logout!!");
      //         redirect("/auth");
      //       }}
      //     >
      //       Logout
      //     </button>
      //   ),
      label: <Link href="/auth">Logout</Link>,
      icon: <CiLogout />,
    },
  ];
  return (
    <Dropdown
      menu={{
        items: USERITEMS,
      }}
      trigger={["click"]}
      className="cursor-pointer"
    >
      <div className="h-12 w-12 rounded-full bg-primary-800 cursor-pointer flex justify-center items-center">
        <FaRegUser className="text-slate-50 text-lg" />
      </div>
    </Dropdown>
  );
};

export default ActionsMenu;
