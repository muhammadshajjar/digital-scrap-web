import { getSpecificBlog } from "@/lib/firebase/firestore";
import BlogForm from "@/ui/dashboard/blogs/BlogForm";
import Breadcrumbs from "@/ui/dashboard/BreadCrumbs";

const EditBlog = async ({ params }) => {
  const blogData = await getSpecificBlog(params.id);

  return (
    <>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Blogs", href: "/dashboard/blogs" },
          {
            label: "Edit Blog",
            href: "/dashboard/blogs/23432/edit",
            active: true,
          },
        ]}
      />
      <div className=" max-w-7xl mt-12">
        <BlogForm blogData={blogData} id={params.id} />
      </div>
    </>
  );
};

export default EditBlog;
