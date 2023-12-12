import Link from "next/link";
import React from "react";
import Header from "@/ui/user/Header";
import Hero from "@/ui/user/home/Hero";
import Services from "@/ui/user/home/Services";
import TrashBin from "@/ui/user/home/TrashBin";
import Reviews from "@/ui/user/home/Reviews";
import Blogs from "@/ui/user/home/Blogs";
import Footer from "@/ui/user/Footer";

import GetAllBlogs from "./GetAllBlogs";

import { Suspense } from "react";
import Faqs from "@/ui/user/home/Faqs";
import AppShowCase from "@/ui/user/home/AppShowCase";
const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <TrashBin />
      <Reviews />
      <Blogs />
      <AppShowCase />
      <Faqs />
      <Footer />
    </>
  );
};

export default Home;
