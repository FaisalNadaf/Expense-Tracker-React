import React from "react";
import Expences from "./Expences";
import { demodata } from "../constant";

const ExpencesList = () => {
  return (
    <div className="border flex items-center justify-center flex-wrap ">
      {demodata
        .map((e) => {
          
         return <Expences {...e}/>;
        })}
    </div>
  );
};

export default ExpencesList;
