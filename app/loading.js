import React from "react";

function Loading() {
  return (
    <div
      className=" fixed top-0 right-0 left-0 bottom-0 bg-white flex flex-col gap-4 "
      style={{ height: "100vh" }}
    >
      <div className=" h-20 w-100 sm:hidden flex justify-between shadow-sm items-center p-5  ">
        <div className=" h-10 rounded w-28 bg-gray-200 animate-pulse "></div>
        <div className="flex justify-between items-center gap-5">
          <div className=" h-10 rounded w-40 bg-gray-200 animate-pulse "></div>
          <div className=" h-10 rounded w-40 bg-gray-200 animate-pulse "></div>
          <div className=" h-10 rounded-full w-10 bg-gray-200 animate-pulse "></div>
        </div>
      </div>

      {/*  */}

      <div className="flex-1 flex gap-5 ">
        <div className="  shadow-current w-1/5  px-5 pt-5 flex gap-5 flex-col">
          <div className=" h-10 rounded w-60 bg-gray-200 animate-pulse "></div>
          <div className=" h-10 rounded w-60 bg-gray-200 animate-pulse "></div>
          <div className=" h-10 rounded w-60 bg-gray-200 animate-pulse "></div>
          <div className=" h-10 rounded w-60 bg-gray-200 animate-pulse "></div>
          <div className=" h-10 rounded w-60 bg-gray-200 animate-pulse "></div>
          <div className=" h-10 rounded w-60 bg-gray-200 animate-pulse "></div>
          <div className=" h-10 rounded w-60 bg-gray-200 animate-pulse "></div>
          <div className=" h-10 rounded w-60 bg-gray-200 animate-pulse "></div>
        </div>
        <div className="flex-3 flex-1  flex flex-col gap-4 pt-5">
          <div className=" h-10 rounded  bg-gray-200 animate-pulse "></div>
          <div className=" h-10 rounded w-60 bg-gray-200 animate-pulse "></div>
          <div className=" h-1/2 rounded  bg-gray-200 animate-pulse "></div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
