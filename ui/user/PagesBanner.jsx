import React from "react";

import { fredoka } from "../fonts";
const PagesBanner = ({ title, descripton }) => {
  return (
    <div className="bg-primary-100 pt-12 pb-14 px-2 sm:pt-20 sm:pb-24 text-center">
      <span
        className={`${fredoka.className} font-bold text-primary-800 text-lg sm:text-2xl`}
      >
        {title}
      </span>
      <h1 className="text-lg sm:text-4xl font-semibold mt-1">{descripton}</h1>
    </div>
  );
};

export default PagesBanner;
