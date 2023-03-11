import useBillboard from "@/hooks/useBillboard";
import React from "react";

const Billboard = () => {
  const { data } = useBillboard();
  return (
    <div className="relative h-[56.25vw]">
      <video
        id="player"
        controls
        src={data?.videoUrl}
        poster={data?.thumbnailUrl}
      ></video>
    </div>
  );
};

export default Billboard;
