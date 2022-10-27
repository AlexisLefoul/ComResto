import React from "react";
import { useState } from "react";

import CardPlat from "../components/CardPlat";
import CardAliment from "../components/CardAliment";
import HeaderNav from "../components/HeaderNav";

function GestionStock() {
  const result = { data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] };
  const [isAliment, setIsAliment] = useState(false);
  const isAdmin = true;
  return (
    <>
      <HeaderNav isAdmin={isAdmin} setIsAliment={setIsAliment} isAliment={isAliment}></HeaderNav>
      {isAliment ? (
        <div className="global">
          <div className="content-box">
            {result?.data?.map((rec) => (
              <CardAliment></CardAliment>
            ))}
          </div>
        </div>
      ) : (
        <div className="global">
          <div className="content-box">
            {result?.data?.map((rec) => (
              <CardPlat isAdmin={isAdmin}></CardPlat>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default GestionStock;
