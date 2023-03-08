import React from "react";
import Hero from "@/components/Hero";
import Feature from "@/components/Feature";
import OfflineWatch from "@/components/OfflineWatch";
import Stream from "@/components/Stream";
import Kids from "@/components/Kids";
import Subscribe from "@/components/Subscribe";
import Footer from "@/components/Footer";

function HomePage() {
  return (
    <div>
      <Hero />
      <div className="w-full  lineColor py-1" />
      <Feature />
      <div className="w-full  lineColor py-1" />
      <OfflineWatch />
      <div className="w-full  lineColor py-1" />
      <Stream />
      <div className="w-full  lineColor py-1" />
      <Kids />
      <div className="w-full  lineColor py-1" />
      <Subscribe />
      <div className="w-full  lineColor py-1" />
      <Footer />
    </div>
  );
}

export default HomePage;
