import React, { useState } from "react";
import ExpencesList from "./ExpencesList";
import { bgcolor } from "../constant";

const Body = () => {
  const [expence, setExpence] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [addhide, setaddhide] = useState(false);

  return (
    <div
      className={`relative bg-[${bgcolor.bg1}] h-screen  w-screen p-4 flex flex-wrap items-center justify-center`}
    >
      <div
        className={`border border-[#A6E3E9] h-1/6 w-full rounded-lg shadow-lg flex justify-between items-center `}
      >
        <button
          className="h-16 w-48 bg-[#F4CE14] rounded-lg mx-4"
          onClick={() => setaddhide(true)}
        >
          Add
        </button>
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
        className={`shadow-2xl h-4/5 w-4/5 border border-[#71C9CE] rounded-lg overflow-auto`}
      >
        <ExpencesList />
      </div>
      {addhide && (
        <div
          className="z-10 h-full w-[100%] fixed top-0 left-0 flex items-center justify-center Z-10"
          style={{ backgroundColor: "rgba(128, 128, 128, 0.9)" }}
        >
          <div className="h-screen md:h-full w-full flex items-center justify-center">
            <div className="z-20 flex items-center justify-center bg-white h-1/3 md:h-3/5 w-[95%] md:w-3/5    pb-8 shadow-2xl rounded-lg relative">
              <button
                onClick={() => {
                  setaddhide(false);
                }}
                className="absolute right-1 top-1 md:right-5 md:top-5 h-8 w-8"
              >
                <button className="fa-solid fa-square-xmark text-2xl "></button>
              </button>
              <img
                src="https://avatar.iran.liara.run/public"
                alt=""
                className="h-12 hidden md:flex  w-12 absolute left-5 top-5"
              />{" "}
              <div className="md:h-[70%] w-[80%] md:w-3/5">
                <div className=" w-[60%]">
                  <div>Date</div>
                  <input
                    type="date"
                    required
                    className="w-[100%]  border border-black rounded p-2 mb-1 text-lg"
                    onChange={(e) => settitle(e.target.value)}
                  />
                </div>
                title
                <div className=" flex items-center justify-between">
                  <div className=" ">
                    <div>Expenxe</div>
                    <input
                      type="number"
                      required
                      className="w-[100%]  border border-black rounded p-2 mb-1 text-lg"
                      onChange={(e) => settitle(e.target.value)}
                    />
                  </div>
                  <div className=" ">
                    <div>Income</div>
                    <input
                      type="number"
                      required
                      className="w-[100%]  border border-black rounded p-2 mb-1 text-lg"
                      onChange={(e) => settitle(e.target.value)}
                    />
                  </div>
                </div>
                note
                <textarea
                  required
                  className="w-[100%] h-[40%] border border-black rounded p-4 text-lg"
                  onChange={(e) => setNote(e.target.value)}
                />
              </div>
              <button
                className="border absolute right-1 bottom-1 md:right-12 md:bottom-5 border-gray-300 px-6 py-2 rounded-lg hover:bg-[#f7d800] bg-[#ffee7e]"
                onClick={() => {}}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Body;
