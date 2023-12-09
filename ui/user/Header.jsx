import React from "react";

import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container sm:flex sm:items-center sm:justify-between m-auto py-3">
        <Link href="/">
          <Image
            src="/images/logo-bg-removed.png"
            width={270}
            height={35}
            alt="Company Logo"
            className="m-auto sm:m-0"
          />
        </Link>

        <div className="mt-4 sm:mt-0 flex justify-center sm:block ">
          <Link
            className="mr-4 py-2 px-6 font-medium border-[#B3B3B3] border-2 rounded-full transition-all duration-300 hover:bg-primary-100"
            href="/scraprates"
          >
            Scrap Rates
          </Link>
          <Link
            href="/auth"
            className="bg-primary-800 font-medium text-white py-2 px-6 border-2 border-transparent rounded-full transition-all duration-300 hover:bg-transparent hover:text-black hover:border-primary-800"
          >
            Admin Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
