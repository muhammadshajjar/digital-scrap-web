import React from "react";

import Image from "next/image";
import Link from "next/link";

const AppShowCase = () => {
  return (
    <div className=" bg-primary-100 md:mt-[350px]">
      <div className=" container m-auto py-16 flex justify-between relative text-center px-4 xl:text-left">
        <Image
          src="/images/appshowcase.png"
          height={800}
          width={800}
          alt="App illustration"
          className="md:block absolute top-[-290px] hidden left-1/2 transform -translate-x-1/2 xl:left-0 xl:transform-none"
        />

        <div className="max-w-[520px] m-auto md:mt-[250px] xl:mt-0 xl:ml-auto xl:mr-5">
          <p className="leading-normal max-w-[430px]">
            Are you ready to experience a whole new level of convenience and
            innovation?
          </p>
          <h2 className="text-2xl md:text-5xl font-semibold !leading-tight my-4">
            Download our App
          </h2>
          <div className="flex xl:justify-start justify-center items-center">
            <Link href="#">
              <Image
                src="/images/playstore.png"
                height={150}
                width={200}
                alt="playstore"
                className="mr-3"
              />
            </Link>
            <Link href="#">
              <Image
                src="/images/appstore.png"
                height={150}
                width={200}
                alt="playstore"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowCase;
