import { getAllBlogs } from "@/lib/firebase/firestore";

import BlogsPreview from "@/ui/blogs/BlogsPreview";
import React from "react";

import Breadcrumbs from "@/ui/dashboard/BreadCrumbs";
import Link from "next/link";

import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

export const metadata = {
  title: "Blogs",
};
const Blogs = async () => {
  const blogsData = await getAllBlogs();
  console.log(blogsData);

  return (
    <>
      <div className="flex justify-between items-center ">
        <Breadcrumbs
          breadcrumbs={[
            {
              label: "Blogs",
              href: "/dashboard/blogs",
              active: true,
            },
          ]}
        />
        <Link href="/dashboard/blogs/new">
          <Button
            type="primary"
            icon={<PlusOutlined />}
            size="large"
            className="bg-primary-800"
          >
            Create New
          </Button>
        </Link>
      </div>

      {/* <BlogsPreview blogsData={blogsData[1]?.content} /> */}
    </>
  );
};

export default Blogs;
