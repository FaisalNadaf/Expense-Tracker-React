import React, { useEffect, useState } from "react";
import { demodata } from "../constant";

const ExpencesList = () => {
  const [data, setData] = useState(demodata);

  return (
    <div className="border flex items-center justify-center flex-wrap ">
      {data?.map(({ id, date, expence, income, description }) => {
        const [hide, setHide] = useState(false);
        return (
          <div
            key={id}
            className="w-[80%] border p-2 my-2 shadow rounded-lg flex items-center justify-center flex-wrap"
          >
            <div className="w-full flex items-center justify-around">
              <div className="w-1/4 text-lg my rounded shadow h-12 flex items-center justify-center">
                {date}
              </div>
              <div className="w-1/4 text-[#ff0000cf] text-lg font-bold rounded shadow h-12 flex items-center justify-center">
                -{expence}
              </div>
              <div className="w-1/4 text-[#11ff39] text-lg font-bold rounded shadow h-12 flex items-center justify-center">
                +{income}
              </div>
              {!hide ? (
                <button
                  className="w-[5%]  rounded shadow h-12 flex items-center justify-center"
                  onClick={() => {
                    setHide(true);
                  }}
                >
                  <i class="fa-solid fa-sort-down text-xl"></i>
                </button>
              ) : (
                <button
                  className="w-[5%]  rounded shadow h-12 flex items-center justify-center"
                  onClick={() => setHide(false)}
                >
                  <i className="fa-regular fa-circle-xmark text-xl"></i>
                </button>
              )}
            </div>
            {hide && (
              <div className="w-[96%]  border my-2 shadow rounded-lg h-28 p-4 flex items-center justify-between relative">
                <div className="w-3/4 shadow-sm rounded-lg border h-full p-2">
                  {description}
                </div>

                <button
                  className="h-10 w-32 shadow-sm rounded-lg border absolute bottom-4 right-4 hover:bg-[#f75f5f] bg-[#ff0000] hover:shadow-2xl font-semibold"
                  onClick={() => {
                    setData(demodata.pop());
                  }}
                >
                  remove
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ExpencesList;
