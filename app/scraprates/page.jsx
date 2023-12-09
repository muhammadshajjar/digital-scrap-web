import Header from "@/ui/user/Header";
import PagesBanner from "@/ui/user/PagesBanner";
import Footer from "@/ui/user/Footer";
import React, { Suspense } from "react";

import GetScrapRates from "@/app/scraprates/GetScrapRates";
import { ScrapList } from "@/ui/user/Skeletons";

const ScrapRates = async () => {
  return (
    <>
      <Header />
      <PagesBanner
        title="Scrap Prices"
        descripton="Unlock the Value of Your Scrap"
      />
      <Suspense fallback={<ScrapList />}>
        <GetScrapRates />
      </Suspense>
      <Footer />
    </>
  );
};

export default ScrapRates;
