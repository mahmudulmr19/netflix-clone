import React from "react";

function Stream() {
  return (
    <div className="container mx-auto mt-5 lg:mt-0 p-5 md:p-8 ">
      <div className="flex flex-col justify-between items-center md:flex-row">
        {/* first 1 */}
        <div className="text-center md:text-left space-y-3">
          <h1 className="text-2xl font-medium lg:text-4xl">
            Watch everywhere.
          </h1>
          <h5 className="text-lg lg:text-2xl max-w-[600px]">
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Stream;
