import React from "react";
import { useState } from "react";

import API from "../app";
import CardPlat from "../components/CardPlat";
import CardAliment from "../components/CardAliment";
import HeaderNav from "../components/HeaderNav";

function GestionStock() {
  const [isAliment, setIsAliment] = useState(false);
  const isAdmin = true;

  const [plats, setPlats] = React.useState(null);
  const [aliments, setAliments] = React.useState(null);

  React.useEffect(() => {
    async function getPlats() {
      const response = await API.get("plats");
      setPlats(response.data);
    }
    async function getAliments() {
      const response = await API.get("aliments");
      setAliments(response.data);
    }
    getPlats();
    getAliments();
  }, []);

  if (!plats) return null;
  if (!aliments) return null;

  console.log(aliments);

  return (
    <>
      <HeaderNav
        isAdmin={isAdmin}
        setIsAliment={setIsAliment}
        isAliment={isAliment}
      ></HeaderNav>
      {isAliment ? (
        <div className="global">
          <div className="content-box">
            {aliments?.map((rec) => (
              <CardAliment aliment={rec} key={rec.id}></CardAliment>
            ))}
          </div>
        </div>
      ) : (
        <div className="global">
          <div className="content-box">
            {plats?.map((rec) => (
              <CardPlat isAdmin={isAdmin} key={rec.id} plat={rec}></CardPlat>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default GestionStock;
