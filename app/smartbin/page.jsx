import Header from "@/ui/user/Header";
import PagesBanner from "@/ui/user/PagesBanner";
import React from "react";
import Image from "next/image";

const SmartBin = () => {
  return (
    <>
      <Header />
      <PagesBanner
        title="Smart Trashbins"
        descripton="Elevate Your Waste Management"
      />
      <div className="flex justify-center items-center flex-col my-20">
        <Image
          src="/images/underworking.png"
          height={800}
          width={800}
          alt="underworking illustration"
        />
        <div className="max-w-2xl text-center">
          <p className="text-lg">
            🌟 The magic is happening behind the scenes as we fine-tune every
            detail to bring you the smartest trashbins ever. 🚀
          </p>
          <p className="mt-3 text-lg">
            We appreciate your enthusiasm and patience as we work to deliver a
            top-notch experience. 🙌 Keep an eye on your notifications—we'll let
            you know the moment the Smart Trashbins are ready to make their
            debut! 🎉
          </p>
        </div>
      </div>
    </>
  );
};

export default SmartBin;
