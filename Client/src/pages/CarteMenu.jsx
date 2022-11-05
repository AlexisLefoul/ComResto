import { useState } from "react";
import React from "react";

import API from "../app";
import CardPlat from "../components/CardPlat";
import HeaderNav from "../components/HeaderNav";

function CarteMenu() {
  const isAdmin = false;
  const [plats, setPlats] = React.useState(null);

  React.useEffect(() => {
    async function getPost() {
      const response = await API.get("plats");
      setPlats(response.data);
    }
    getPost();
  }, []);

  if (!plats) return null;

  return (
    <>
      <HeaderNav isAdmin={isAdmin}></HeaderNav>
      <div className="global">
        <div className="content-box">
          {plats?.map((rec) => (
            <CardPlat isAdmin={isAdmin} key={rec.id} plat={rec}></CardPlat>
          ))}
        </div>
      </div>
    </>
  );
}

export default CarteMenu;
