import Link from "next/link";
import React from "react";
import Header from "@/ui/user/Header";
import Hero from "@/ui/user/home/Hero";
import Services from "@/ui/user/home/Services";
const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Services />
    </>
  );
};

export default Home;
