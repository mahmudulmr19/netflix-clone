import React from "react";

interface MovieCardProps {
  data: Record<string, any>;
}

const MovieCard: React.FC<MovieCardProps> = ({ data }) => {
  return (
    <div className="group  col-span relative h-[12vw]">
      <img
        className="cursor-pointer object-cover w-full h-full transition duration shadow-xl rounded-md group-hover:opacity-90"
        src={data?.thumbnailUrl}
        alt="thumbail"
      />
    </div>
  );
};

export default MovieCard;
