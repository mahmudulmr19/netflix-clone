import React from "react";

function Feature() {
  return (
    <div className="container mx-auto mt-5 lg:mt-0 p-5 md:p-8 ">
      <div className="flex flex-col justify-between items-center md:flex-row">
        {/* first 1 */}
        <div className="text-center md:text-left space-y-3">
          <h1 className="text-2xl font-medium lg:text-4xl">
            Enjoy on your TV.
          </h1>
          <h5 className="text-lg lg:text-2xl">
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </h5>
        </div>

        {/* Second 1 */}
        <div className="relative overflow-hidden">
          <img
            src="/images/tv.png"
            alt="tv"
            className="max-w-full h-auto relative z-[2]"
          />
          <div className="w-full  transform -translate-x-[50%] -translate-y-[50%] h-full absolute top-[46%] left-[50%] max-w-[73%] max-h-[54%]">
            <video
              className="w-full h-full"
              playsInline
              muted
              loop
              autoPlay
              src="/images/video.m4v"
            ></video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
