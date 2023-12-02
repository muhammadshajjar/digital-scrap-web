import Breadcrumbs from "@/ui/dashboard/BreadCrumbs";
import Link from "next/link";

import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Suspense } from "react";

import AllFacilities from "./AllFacilities";
import { Listings } from "@/ui/dashboard/Skeletons";

export const metadata = {
  title: "Facilities",
};
const Facilities = async () => {
  return (
    <>
      <div className="flex justify-between items-center ">
        <Breadcrumbs
          breadcrumbs={[
            {
              label: "Registerd Facilities",
              href: "/dashboard/facilities",
              active: true,
            },
          ]}
        />
        <Link href="/dashboard/facilities/new">
          <Button
            type="primary"
            icon={<PlusOutlined />}
            size="large"
            className="bg-primary-800"
          >
            Register New
          </Button>
        </Link>
      </div>
      <Suspense fallback={<Listings />}>
        <AllFacilities />
      </Suspense>
    </>
  );
};

export default Facilities;
