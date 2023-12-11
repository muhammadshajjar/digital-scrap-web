import React, { Suspense } from "react";
import { fredoka } from "@/ui/fonts";
import BlogsCarousel from "./BlogsCarousel";
import GetAllBlogs from "@/app/GetAllBlogs";
import { BlogsCard } from "@/ui/dashboard/Skeletons";

const Blogs = () => {
  return (
    <section>
      <div className="container m-auto text-center mt-28 mb-20">
        <span
          className={`${fredoka.className} font-bold text-primary-800 text-lg sm:text-2xl`}
        >
          Blogs
        </span>
        <h2 className="text-2xl md:text-3xl lg:text-[38px] font-semibold !leading-tight">
          The Latest From Our Publications
        </h2>

        <Suspense fallback={<BlogsCard />}>
          <GetAllBlogs />
        </Suspense>
      </div>
    </section>
  );
};

export default Blogs;
