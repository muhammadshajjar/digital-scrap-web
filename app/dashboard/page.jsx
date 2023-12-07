import Breadcrumbs from "@/ui/dashboard/BreadCrumbs";
import StatsCard from "@/ui/dashboard/home/StatsCard";
import React from "react";

import Image from "next/image";

const DashboardHome = async () => {
  return (
    <>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Dashboard Home", href: "/dashboard", active: true },
        ]}
      />
      <div className="flex flex-wrap justify-center gap-10 mt-10 ml-auto mr-auto max-w-7xl">
        <StatsCard title="Total Users" desc="300" />
        <StatsCard title="Todays sales" desc="Rs. 20,000" />
        <StatsCard title="Total Earned" desc="Rs. 32,00000" />
      </div>

      <div className="flex justify-center mt-20">
        <Image src="/images/Graph.png" height={300} width={700}></Image>
      </div>
    </>
  );
};

export default DashboardHome;
