import React, { Suspense } from "react";

import Breadcrumbs from "@/ui/dashboard/BreadCrumbs";
import Link from "next/link";

import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import { BlogsCard } from "@/ui/dashboard/Skeletons";
import AllBlogs from "./AllBlogs";

export const metadata = {
  title: "Blogs",
};
const Blogs = async () => {
  return (
    <div className="container">
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
      <Suspense fallback={<BlogsCard />}>
        <AllBlogs />
      </Suspense>
    </div>
  );
};

export default Blogs;
