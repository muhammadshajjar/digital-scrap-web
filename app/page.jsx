import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <>
      <div> Home</div>
      <Link href="/auth">Admin Login</Link>
    </>
  );
};

export default Home;
