import React from "react";
import ExpencesList from "./ExpencesList";
import { bgcolor } from "../constant";

const ShimmerUi = () => {
  return (
    <div
      className={`bg-[${bgcolor.bg1}] h-screen  w-screen p-4 flex flex-wrap items-center justify-center`}
    >
      <div
        className={`border border-[${bgcolor.bg4}] h-1/6 w-full rounded-lg shadow-lg`}
      >
        {" "}
      </div>
      <div className="shadow-2xl h-4/5 w-4/5 border rounded-lg"></div>
    </div>
  );
};

export default ShimmerUi;
