import Breadcrumbs from "@/ui/dashboard/BreadCrumbs";
import React from "react";

const DashboardHome = async () => {
  return (
    <>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Dashboard Home", href: "/dashboard", active: true },
        ]}
      />
    </>
  );
};

export default DashboardHome;
