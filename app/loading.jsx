import Image from "next/image";
import React from "react";

const loading = () => {
  return (
    <section className="bg-primary-100 h-screen w-screen flex justify-center items-center">
      <Image
        src="/images/logo-bg-removed.png"
        width={300}
        height={35}
        alt="Company Logo"
        className="animate-ping w-40 md:w-80"
      />
    </section>
  );
};

export default loading;
