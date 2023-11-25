import React from "react";
import Image from "next/image";
import Link from "next/link";
import AuthForm from "@/ui/auth/AuthForm";

export const metadata = {
  title: "Authentication",
};

const Authentication = () => {
  return (
    <>
      <header className="pt-4 sm:pt-10 sm:pl-10 container mx-auto">
        <Link href="/">
          <Image
            src="/images/logo-bg-removed.png"
            width={300}
            height={45}
            alt="Company Logo"
            className="w-56 sm:w-72"
          />
        </Link>
      </header>
      <main className="px-3 sm:bg-[url('/images/auth-illustration.png')] bg-no-repeat bg-right-bottom">
        <section className="h-[calc(100vh-106px)] flex flex-col justify-center sm:ml-20 md:ml-36">
          <h2 className="text-2xl md:text-3xl font-bold tracking-wide">
            Welcome Back!
          </h2>
          <p className="tracking-wide mt-2 mb-5">
            Please Enter your details to proceed.
          </p>
          <AuthForm />
        </section>
      </main>
    </>
  );
};

export default Authentication;
