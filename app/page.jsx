import Link from "next/link";
import React from "react";
import Header from "@/ui/user/Header";
import Hero from "@/ui/user/home/Hero";
import Services from "@/ui/user/home/Services";
import TrashBin from "@/ui/user/home/TrashBin";
import Reviews from "@/ui/user/home/Reviews";
const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <TrashBin />
      <Reviews />
    </>
  );
};

export default Home;
