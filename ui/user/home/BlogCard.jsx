import React from "react";
import Image from "next/image";
import Link from "next/link";
const BlogCard = ({ blogPostData }) => {
  const imageURL = blogPostData?.thumbnail[0]?.url;
  return (
    <div className="flex justify-between max-w-2xl h-72 border-[2px] border-secondary-200 rounded-md text-left mx-3">
      <div className="hidden sm:block sm:w-[48%]">
        <Image
          src={imageURL}
          width={100}
          height={35}
          alt="Blogs Thumbnail"
          className="w-full h-full rounded object-cover"
        />
      </div>
      <div className="w-[100%] sm:w-[58%] py-4 px-6 flex flex-col">
        <span className="text-sm font-semibold">{blogPostData?.postDate}</span>
        <h2 className="font-semibold text-2xl my-2">{blogPostData?.title}</h2>
        <p className="overflow-scroll">{blogPostData?.breifintro}</p>
        <div className="flex justify-between items-center mt-auto">
          <Link
            href={`/blogs/${blogPostData?.id}`}
            className="font-medium underline text-black hover:text-primary-800"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
