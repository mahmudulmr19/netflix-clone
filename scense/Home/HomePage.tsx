import React from "react";
import Hero from "@/components/Hero";
import Feature from "@/components/Feature";
import OfflineWatch from "@/components/OfflineWatch";
import Stream from "@/components/Stream";
import Kids from "@/components/Kids";
function HomePage() {
  return (
    <div>
      <Hero />
      <div className="w-full  bg-[#222222] py-1" />
      <Feature />
      <div className="w-full  bg-[#222222] py-1" />
      <OfflineWatch />
      <div className="w-full  bg-[#222222] py-1" />
      <Stream />
      <div className="w-full  bg-[#222222] py-1" />
      <Kids />
      <div className="w-full  bg-[#222222] py-1" />
    </div>
  );
}

export default HomePage;
