import React from "react";
import Breadcrumbs from "@/ui/dashboard/BreadCrumbs";
import BlogForm from "@/ui/blogs/BlogForm";
const CreateNewBlog = () => {
  return (
    <>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Blogs", href: "/dashboard/blogs" },
          {
            label: "Create New Blog",
            href: "/dashboard/blogs/new",
            active: true,
          },
        ]}
      />
      <div className="max-w-7xl mt-12 bg-500">
        <BlogForm />
      </div>
    </>
  );
};

export default CreateNewBlog;
