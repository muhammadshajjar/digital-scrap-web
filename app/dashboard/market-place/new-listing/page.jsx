import React from "react";

import Breadcrumbs from "@/ui/dashboard/BreadCrumbs";

const NewListing = () => {
  return (
    <>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Listings", href: "/dashboard/market-place" },
          {
            label: "Create new Listing",
            href: "/dashboard/market-place/new-listing",
            active: true,
          },
        ]}
      />
    </>
  );
};

export default NewListing;
