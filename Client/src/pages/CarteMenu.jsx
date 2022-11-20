import { useState, useEffect } from "react";
import React from "react";
import latinize from "latinize";

import API from "../app";
import CardPlat from "../components/CardPlat";
import HeaderNav from "../components/HeaderNav";

function CarteMenu() {
  const isAdmin = false;

  const [refresh, setRefresh] = useState(false);
  const [plats, setPlats] = useState(null);
  const [typePlat, setTypePlat] = useState(null);
  var optsPlats = [];

  function getOptsPlats() {
    plats?.forEach((p) => {
      var op = toLowerCase(p.type);
      latinize(op);
      optsPlats.includes(op) ? null : optsPlats.push(op);
    });
    optsPlats.sort();
  }

  async function getPlats() {
    const response = await API.get("plats");
    setPlats(response.data);
    setRefresh(false);
  }

  async function getPlatsParType() {
    const response = await API.get("plats/type/" + typePlat);
    setPlats(response.data);
    setRefresh(false);
  }

  useEffect(() => {
    if (typePlat !== null) {
      getPlatsParType();
    } else {
      getPlats();
    }
  }, [refresh]);

  if (plats !== null) {
    getOptsPlats();
  }

  if (!plats)
    return (
      <>
        <h1>Pas de plats disponibles ! 🤷‍♂️</h1>
      </>
    );

  return (
    <>
      <HeaderNav
        isAdmin={isAdmin}
        setTypePlat={setTypePlat}
        setRefresh={setRefresh}
        optsPlats={optsPlats}
      ></HeaderNav>
      <div className="global">
        <div className="content-box">
          {plats?.map((rec, index) => (
            <CardPlat
              isAdmin={isAdmin}
              key={index}
              plat={rec}
              refresh={refresh}
            ></CardPlat>
          ))}
        </div>
      </div>
    </>
  );
}

export default CarteMenu;

function toLowerCase(a) {
  return (a + "").toLowerCase();
}
