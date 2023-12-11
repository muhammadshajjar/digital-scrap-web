import React from "react";

import BlogsPreview from "@/ui/user/blogs/BlogsPreview";
import Blogs from "@/ui/user/home/Blogs";
import { getSpecificBlog } from "@/lib/firebase/firestore";
import Footer from "@/ui/user/Footer";

const BlogPost = async ({ params }) => {
  const specificIdPostData = await getSpecificBlog(params?.id);

  return (
    <>
      <div className="container m-auto">
        <BlogsPreview blogsData={specificIdPostData} />
        <Blogs forRelatedBlogs={true} />
      </div>
      <Footer />
    </>
  );
};

export default BlogPost;
