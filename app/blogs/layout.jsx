import React from "react";
import Header from "@/ui/user/Header";
import PagesBanner from "@/ui/user/PagesBanner";
const layout = ({ children }) => {
  return (
    <>
      <Header />
      <PagesBanner
        title="Blog Detail"
        descripton="Scrap & Stories Your Portal to Sustainability"
      />
      <section>{children}</section>
    </>
  );
};

export default layout;
