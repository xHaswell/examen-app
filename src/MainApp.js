import React, { useEffect, useState } from "react";
import { Arreglo } from "./Arreglo";

export const MainApp = () => {
  const [arreglos, setArreglos] = useState([]);
  useEffect(() => {
    getArreglos();
  }, []);

  const getArreglos = async () => {
    const url =
      "https://my-json-server.typicode.com/mtruesp/endpointdata/numbers";
    const resp = await fetch(url);
    const data = await resp.json();
    setArreglos(Object.values(data));
  };

  return (
    <>
      <h2>Main App</h2>
      <hr />
      <ol>
        {arreglos.map((a, index) => (
          <Arreglo key={index} value={a} />
        ))}
      </ol>
    </>
  );
};
