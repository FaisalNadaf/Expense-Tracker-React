import React, { useState } from "react";
import Expences from "./Expences";
import { demodata } from "../constant";

const ExpencesList = () => {
  const [data, setData] = useState(demodata);

  return (
    <div className="border flex items-center justify-center flex-wrap ">
      {data?.map((e) => {
        return <Expences {...e} setData={setData} />;
      })}
    </div>
  );
};

export default ExpencesList;
