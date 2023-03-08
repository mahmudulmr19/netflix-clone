import React from "react";

function kids() {
  return (
    <div className="container mx-auto mt-5 lg:mt-0 p-5 md:p-8 ">
      <div className="flex flex-col justify-between items-center md:flex-row-reverse">
        {/* first 1 */}
        <div className="text-center md:text-left space-y-3">
          <h1 className="text-2xl font-medium lg:text-4xl">
            Create profiles for kids.
          </h1>
          <h5 className="text-lg lg:text-2xl">
            Send kids on adventures with their favorite characters in a space
            made just for them—free with your membership.
          </h5>
        </div>

        {/* Second 1 */}
        <div className="relative overflow-hidden">
          <img src="/images/kids.png" alt="kids" className="w-screen h-auto " />
        </div>
      </div>
    </div>
  );
}

export default kids;
