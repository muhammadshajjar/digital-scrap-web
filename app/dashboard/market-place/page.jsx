import React from "react";

import Link from "next/link";

export const metadata = {
  title: "Market Place",
};
const MarketPlace = () => {
  return (
    <>
      <div>MarketPlace</div>
      <Link href="/dashboard/market-place/new-listing">Create new listing</Link>
    </>
  );
};

export default MarketPlace;
