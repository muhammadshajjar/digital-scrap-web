import React from "react";
import { Empty } from "antd";

import BlogCard from "@/ui/blogs/BlogCard";
import { getAllBlogs } from "@/lib/firebase/firestore";

const AllBlogs = async () => {
  const blogsData = await getAllBlogs();
  return (
    <div className="flex justify-center flex-wrap gap-6 mt-10">
      {blogsData?.map((blogData) => (
        <BlogCard key={blogData.id} blogData={blogData} />
      ))}
      {blogsData?.length === 0 && (
        <Empty description={<span>No Blogs Found!</span>} />
      )}
    </div>
  );
};

export default AllBlogs;
