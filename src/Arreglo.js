import React from "react";

export const Arreglo = ({ value }) => {
  console.log(value);
  const handleSum = (ar) => {
    let res = "false";
    ar.every((v) => {
      ar.every((v2) => {
        if (v + v2 === 8 && v !== v2) {
          console.log("val1: ", v, " val2: ", v2, " ", v + v2);
          res = "true";
          return false;
        }
        return true;
      });
      return true;
    });
    return res;
  };

  return (
    <li>
      <pre>
        {JSON.stringify(value)} {handleSum(value)}
      </pre>
    </li>
  );
};
