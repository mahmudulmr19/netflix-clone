import Link from "next/link";
import React from "react";
import Router from "next/router";
function Hero() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="bg-[linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('/images/hero.jpg')] bg-cover w-full h-[90vh] sm:h-[90vh] md:h-screen bg-center relative">
      <div className="max-w-full px-7 sm:px-9 md:px-11 py-6 mx-auto">
        <div className="container mx-auto">
          {/* header */}
          <div className="flex justify-between items-center">
            <Link href="/">
              <img
                src="/images/nav_logo.svg"
                alt="nav_logo"
                className="w-28  sm:w-32 md:w-36 "
              />
            </Link>
            <div>
              <Link
                href="/login"
                className="bg-[#E50914]  text-white px-4 py-1.5 rounded text-base "
              >
                Sign In
              </Link>
            </div>
          </div>

          {/* header content */}
          <div className="absolute space-y-5 mt-[20%] sm:mt-[10%] md:mt-[6%] w-full text-center top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]">
            <div>
              <h1 className="text-3xl md:text-5xl max-w-[640px] mx-auto text-center font-medium ">
                Unlimited movies, TV shows, and more.
              </h1>

              <h3 className="text-lg md:text-2xl ">
                Plans now start at USD2.99/month.
              </h3>
              <p className="mt-3.5 text-lg max-w-[450px] mx-auto  md:text-2xl lg:max-w-full">
                Ready to watch? Enter your email to create or restart your
                membership.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className=" flex-col p-4 gap-4 md:gap-0 md:flex-row flex justify-center items-center max-w-[640px] mx-auto  overflow-hidden"
            >
              <input
                className="w-full md:flex-1 outline-none bg-white py-3 px-2 rounded-sm text-gray-800"
                type="text"
                placeholder="Email Address"
              />
              <button
                onClick={() => Router.push("/login")}
                className=" bg-[#ca0812] w-full md:w-auto hover:bg-[#E50914] px-5 py-3 rounded-sm"
              >
                Get Started
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
