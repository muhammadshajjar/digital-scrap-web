"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { DeleteBlog, UpdateBlog } from "@/ui/blogs/BlogActions";
const BlogCard = ({ blogData }) => {
  const imageURL = blogData?.thumbnail[0]?.url;
  return (
    <div className="flex justify-between max-w-2xl h-72 border-[2px] border-secondary-200 rounded-md">
      <div className="w-[42%]">
        <Image
          src={imageURL}
          width={100}
          height={35}
          alt="Blogs Thumbnail"
          className="w-full h-full rounded"
        />
      </div>
      <div className="w-[58%] py-4 px-6 flex flex-col">
        <span className="text-sm font-semibold">{blogData?.postDate}</span>
        <h2 className="font-semibold text-2xl my-2">{blogData?.title}</h2>
        <p className="overflow-scroll">{blogData?.breifintro}</p>
        <div className="flex justify-between items-center mt-auto">
          <Link href="#" className="font-medium underline">
            Preview
          </Link>
          <div>
            <UpdateBlog id={blogData?.id} />
            <DeleteBlog id={blogData?.id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
