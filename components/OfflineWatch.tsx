import React from "react";

function OfflineWatch() {
  return (
    <div className="container mx-auto mt-5 lg:mt-0 p-5 md:p-8 ">
      <div className="flex flex-col justify-between items-center md:flex-row-reverse">
        {/* first 1 */}
        <div className="text-center md:text-left space-y-3">
          <h1 className="text-2xl font-medium lg:text-4xl">
            Download your shows to watch offline.
          </h1>
          <h5 className="text-lg lg:text-2xl">
            Save your favorites easily and always have something to watch.
          </h5>
        </div>

        {/* Second 1 */}
        <div className="relative overflow-hidden">
          <img
            src="/images/mobile.jpg"
            alt="tv"
            className="max-w-full h-auto relative "
          />
          <div className="flex items-center bg-black border-[hsla(0,0%,100%,.25)] border-[2px] rounded-[0.75rem] absolute transform -translate-x-[50%] w-[60%] bottom-[8%] left-[50%]  px-[0.5rem] py-[0.75rem] mx-auto min-w-[15em] p-[0.25em,0.65em]">
            {/* first */}
            <div className="flex-grow-0 flex-shrink-0 mr-[1em]">
              <img className="h-[4.5em]" src="/images/movie.png" alt="movie" />
            </div>

            {/* second */}
            <div className="flex-grow flex-shrink my-[0.3em]">
              <div className="text-base">Stranger Things</div>
              <div className="text-base text-blue-500">Downloading...</div>
            </div>
            {/* third */}
            <div
              className="bg-[url('/images/download.gif')] block flex-shrink-0 flex-grow-0 bg-no-repeat w-[3em] h-[3em] outline-2 -outline-offset-2"
              style={{ backgroundSize: "100%", content: "" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OfflineWatch;
