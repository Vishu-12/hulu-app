import Image from "next/image";
import React from "react";
import { ThumbUpIcon } from "@heroicons/react/outline";

export default function Thumbnail({ result }) {
  const BASEURL = "https://image.tmdb.org/t/p/original/";
  return (
    <div className="p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
      <Image
        layout="responsive"
        src={
          //   `${BASEURL}${result.backdrop_path || result.poster_path}` ||
          "https://picsum.photos/200/300"
        }
        height={200}
        width={300}
        alt={"image not found"}
      />
      <div className="p-2">
        <p className="truncate max-w-md">
          {/* {result.overview} */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eaque
          dolorem distinctio facere asperiores minima inventore totam quos aut
          eius.
        </p>
        <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">
          {/* {result.title || result.original_name} */}
          The Godfather
        </h2>
        <p className="flex items-center opacity-0 group-hover:opacity-100">
          {/* {result.media_type && `${result.media_type} .`} {" "}*/}
          {/* {result.release_date || result.first_air_date} . {" "} */}
          <ThumbUpIcon className="h-5 mx-2" />
          {/* {result.vote_count} */}
        </p>
      </div>
    </div>
  );
}
