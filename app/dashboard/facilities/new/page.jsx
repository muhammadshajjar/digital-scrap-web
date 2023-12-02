import Breadcrumbs from "@/ui/dashboard/BreadCrumbs";
import NewFacilityForm from "@/ui/dashboard/facilities/FacilityForm";
const NewFacility = () => {
  return (
    <>
      <Breadcrumbs
        breadcrumbs={[
          { label: " Facilities", href: "/dashboard/facilities" },
          {
            label: "Create new Facility",
            href: "/dashboard/facilities/new",
            active: true,
          },
        ]}
      />
      <div className="max-w-7xl mt-12 bg-500">
        <NewFacilityForm />
      </div>
    </>
  );
};

export default NewFacility;
