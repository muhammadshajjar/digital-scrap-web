import Image from "next/image";
import React from "react";

import NavLinks from "@/ui/dashboard/NavLinks";

import ActionsMenu from "@/ui/dashboard/ActionsMenu";
import Link from "next/link";

export const metadata = {
  title: {
    template: "%s |  Digital Scrap Dashboard",
    default: "Digital Scrap Dashboard",
  },
  description: "Dashboard for administration related  tasks",
};

const DashboardRootLayout = ({ children }) => {
  return (
    <>
      <main className="h-screen bg-secondary-200 ">
        <div className="px-4 py-2 flex justify-between items-center">
          <Link href="/dashboard">
            <Image
              src="/images/logo-bg-removed.png"
              width={240}
              height={35}
              alt="Company Logo"
            />
          </Link>
          <div className="flex content-center">
            <ActionsMenu />
          </div>
        </div>
        <div className="flex h-[calc(100vh-76px)]">
          <NavLinks />
          <div className="w-full p-6 rounded bg-white overflow-scroll">
            {children}
          </div>
        </div>
      </main>
    </>
  );
};

export default DashboardRootLayout;
