import React, { Suspense } from "react";
import { fredoka } from "@/ui/fonts";
import BlogsCarousel from "./BlogsCarousel";
import GetAllBlogs from "@/app/GetAllBlogs";
import { BlogsCard } from "@/ui/dashboard/Skeletons";

const Blogs = ({ forRelatedBlogs }) => {
  return (
    <section>
      <div className="container m-auto text-center mt-20 md:mt-28 mb-12 md:mb-20 px-4">
        <span
          className={`${fredoka.className} font-bold text-primary-800 text-lg sm:text-2xl`}
        >
          {forRelatedBlogs ? "Related Blogs" : "Blogs"}
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
