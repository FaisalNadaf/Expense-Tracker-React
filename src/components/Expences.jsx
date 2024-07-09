import React, { useState } from "react";

const Expences = ({ id,date, expence, income, description }) => {
  const [hide, setHide] = useState(false);
  return (
    <div className="w-[80%] border my-2 shadow rounded-lg flex items-center justify-center flex-wrap">
      <div className="w-full flex items-center justify-around">
        <div className="w-1/4  my rounded shadow h-12 flex items-center justify-center">
          {date}
        </div>
        <div className="w-1/4  rounded shadow h-12 flex items-center justify-center">
          {expence}
        </div>
        <div className="w-1/4  rounded shadow h-12 flex items-center justify-center">
          {income}
        </div>
        <button
          className="w-[5%]  rounded shadow h-12 flex items-center justify-center"
          onClick={() => {
            setHide(true);
          }}
        >
          v
        </button>
      </div>
      {hide && (
        <div className="w-[96%]  border my-2 shadow rounded-lg h-28 p-4 flex items-center justify-between relative">
          <div className="w-3/4 shadow-sm rounded-lg border h-full p-2">
            {description}
          </div>
          <button
            className=" absolute right-4 top-4"
            onClick={() => setHide(false)}
          >
            <i className="fa-regular fa-circle-xmark h-full w-full"></i>
          </button>
          <button className="h-10 w-32 shadow-sm rounded-lg border absolute bottom-4 right-4 hover:bg-[#f75f5f] bg-[#ff0000] hover:shadow-2xl font-semibold" onClick={()=>{demodata[id-1].pop()}}>
            Destroy
          </button>
        </div>
      )}
    </div>
  );
};

export default Expences;
