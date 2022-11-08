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

  const [refresh, setRefresh] = useState(false);

  async function getPlats() {
    const response = await API.get("plats");
    setPlats(response.data);
  }
  async function getAliments() {
    const response = await API.get("aliments");
    setAliments(response.data);
  }
  React.useEffect(() => {
    getPlats();
    getAliments();
  }, [refresh]);

  if (!plats) return null;
  if (!aliments) return null;
  
  return (
    <>
      <HeaderNav
        isAdmin={isAdmin}
        setIsAliment={setIsAliment}
        isAliment={isAliment}
        setList={getAliments}
        setRefresh={setRefresh}
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
