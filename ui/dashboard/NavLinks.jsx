"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { DashboardNavLinks } from "@/lib/dashboard-nav";

import { TbLogout2 } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa";

import clsx from "clsx";
const NavLinks = () => {
  const pathname = usePathname();
  return (
    <aside className="sm:w-64 px-4 flex flex-col ">
      <div className="hidden sm:flex items-center flex-col mt-5  border-b-2">
        <div className=" h-12 w-12 rounded-full bg-primary-800 cursor-pointer flex justify-center items-center">
          <FaRegUser className="text-slate-50 text-lg" />
        </div>
        <p className="hidden sm:block font-semibold text-lg mt-3">
          Talha Arshad
        </p>
        <span className="hidden sm:block text-sm mb-6">@talha992</span>
      </div>
      <ul className="mt-3">
        {DashboardNavLinks.map(([title, url, icon]) => {
          const LinkIcon = icon;
          return (
            <li
              key={url}
              className={clsx(
                "p-2 mb-1 rounded hover:bg-primary-800 hover:text-slate-50 ",
                { "bg-primary-800 text-slate-50": pathname === url }
              )}
            >
              <Link href={url} prefetch={false}>
                <div className="flex items-center align-middle justify-center sm:justify-start">
                  <LinkIcon />
                  <p className="hidden sm:block ml-2">{title}</p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
      <ul className="mt-auto  mb-4">
        <li>
          <Link href="/auth" className="flex items-center">
            <TbLogout2 />
            <p className="hidden sm:block ml-2">Logout </p>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default NavLinks;
