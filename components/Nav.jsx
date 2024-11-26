import React from "react";
import requests from "../utils/requests";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="relative">
      <div className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
        {Object.entries(requests).map(([key, { title, url }]) => (
          <Link
            href={`/?genre=${key}`}
            key={key}
            className="last:pr-24 curson-pointer transition duration-100 transform hover:text-white hover:scale-125  active:text-red-500"
          >
            {title}
          </Link>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12 " />
    </nav>
  );
}
