import React from "react";
import Router from "next/router";
function Subscribe() {
  function handleSubmit(event: React.SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
  }
  return (
    <div className="mt-10 mb-10">
      <h1 className="text-center text-lg ">
        Ready to watch? Enter your email to create or restart your membership.
      </h1>
      <div>
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
  );
}

export default Subscribe;
