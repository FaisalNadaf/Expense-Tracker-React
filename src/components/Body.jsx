import React, { useState } from "react";
import ExpencesList from "./ExpencesList";
import { bgcolor } from "../constant";

const Body = () => {
  const [expence, setExpence] = useState(0);
  const [remaining, setRemaining] = useState(0);

  return (
    <div
      className={`bg-[${bgcolor.bg1}] h-screen  w-screen p-4 flex flex-wrap items-center justify-center`}
    >
      <div
        className={`border border-[#A6E3E9] h-1/6 w-full rounded-lg shadow-lg flex justify-between items-center `}
      >
        <button className="h-16 w-48 bg-[#F4CE14] rounded-lg mx-4">Add</button>
        <div className="flex justify-center items-center">
          <div className="h-16 w-48 bg-[#FF0000] rounded-lg mx-4  flex items-center justify-center   text-3xl    ">
            ₹{expence}
          </div>
          <div className="h-16 w-48 bg-[#9CDBA6] rounded-lg mx-4 flex items-center justify-center   text-3xl ">
            ₹{remaining}
          </div>
        </div>
      </div>
      <div
        className={`shadow-2xl h-4/5 w-4/5 border border-[#71C9CE] rounded-lg `}
      >
        <ExpencesList />
      </div>
    </div>
  );
};

export default Body;
