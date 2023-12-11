"use client";
import React from "react";
import Image from "next/image";

import MarkdownPreview from "@uiw/react-markdown-preview";

const BlogsPreview = ({ blogsData }) => {
  const imageURL = blogsData?.thumbnail[0]?.url;

  return (
    <div className="px-4 lg:px-14 my-8 md:my-14">
      <span className="font-bold text-lg">{blogsData?.postDate}</span>
      <h2 className="font-semibold text-2xl md:text-4xl  lg:text-5xl mt-3 mb-6 leading-snug">
        {blogsData?.title}
      </h2>
      <div className="h-[330px] md:h-[520px]">
        <Image
          src={imageURL}
          width={900}
          height={700}
          className="w-full h-full"
          alt="Blog thumbnail image"
        />
      </div>

      <div className="flex justify-between gap-8 my-10">
        <div data-color-mode="light" className="w-[100%] md:w-[80%] ">
          <MarkdownPreview
            source={blogsData?.content}
            rehypeRewrite={(node, index, parent) => {
              if (
                node.tagName === "a" &&
                parent &&
                /^h(1|2|3|4|5|6)/.test(parent.tagName)
              ) {
                parent.children = parent.children.slice(1);
              }
            }}
          />
        </div>
        <div className="hidden md:flex w-[20%] bg-[#EBEBEB] items-center justify-center">
          <span className="">Advertisement</span>
        </div>
      </div>
      <div className="bg-[#EBEBEB] flex items-center justify-center h-44">
        <span className="">Advertisement</span>
      </div>
    </div>
  );
};

export default BlogsPreview;
