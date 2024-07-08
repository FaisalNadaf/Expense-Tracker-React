import React from "react";

const Expences = () => {
  return (
    <div className="w-[80%] border shadow rounded-lg h-14 flex items-center justify-around">
      <div className="w-1/4 border rounded shadow h-12 flex items-center justify-center">
        date
      </div>
      <div className="w-1/4 border rounded shadow h-12 flex items-center justify-center">
        expences
      </div>
      <div className="w-1/4 border rounded shadow h-12 flex items-center justify-center">
        earn
      </div>
      <div className="w-[5%] border rounded shadow h-12 flex items-center justify-center">
        v
      </div>
    </div>
  );
};

export default Expences;
