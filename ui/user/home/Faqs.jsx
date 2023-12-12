"use client";
import { FAQS } from "@/lib/Faqs";
import React from "react";
import { Collapse } from "antd";

import { BiSolidMinusSquare, BiSolidPlusSquare } from "react-icons/bi";

import { fredoka } from "@/ui/fonts";
const Faqs = () => {
  const customIcon = (panelProps) => {
    const { isActive } = panelProps;
    return (
      <span>
        {isActive ? (
          <BiSolidMinusSquare style={{ fontSize: "30px", color: "#42A554" }} />
        ) : (
          <BiSolidPlusSquare style={{ fontSize: "30px", color: "#42A554" }} />
        )}
      </span>
    );
  };
  return (
    <div className="container m-auto">
      <div className="flex flex-col md:flex-row md:justify-between items-center px-4 lg:px-10 my-14 md:my-24">
        <div className="w-[100%] md:w-[38%] self-start">
          <span
            className={`${fredoka.className} font-bold text-primary-800 text-lg sm:text-2xl`}
          >
            FAQs
          </span>
          <h2 className="text-2xl md:text-4xl font-semibold !leading-tight">
            Solving Your Scrap Management Queries
          </h2>
          <p className="mt-4 mb-6 leading-normal">
            Explore the ins and outs of our platform and discover how you can
            make the most of it with these frequently asked questions and
            answers.
          </p>
        </div>
        <div className="w-[100%] md:w-[50%]">
          <Collapse
            defaultActiveKey={["1"]}
            ghost
            items={FAQS}
            accordion
            expandIcon={customIcon}
          />
        </div>
      </div>
    </div>
  );
};

export default Faqs;
