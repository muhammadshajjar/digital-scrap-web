import { getAllBlogs } from "@/lib/firebase/firestore";
import BlogsCarousel from "@/ui/user/home/BlogsCarousel";
import React from "react";

const GetAllBlogs = async () => {
  const allBlogsData = await getAllBlogs();

  return <BlogsCarousel blogPosts={allBlogsData} />;
};

export default GetAllBlogs;
