import { useState } from "react";
import React from "react";

import CardPlat from "../components/CardPlat";
import HeaderNav from "../components/HeaderNav";

function CarteMenu() {
  const result = { data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] };
  const isAdmin = false;
  return (
    <>
      <HeaderNav isAdmin={isAdmin}></HeaderNav>
      <div className="global">
        <div className="content-box">
          {result?.data?.map((rec) => (
            <CardPlat isAdmin={isAdmin}></CardPlat>
          ))}
        </div>
      </div>
    </>
  );
}

export default CarteMenu;
