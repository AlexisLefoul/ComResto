import React from "react";
import { useState, useEffect } from "react";
import latinize from "latinize";

import API from "../api";
import CardPlat from "../components/CardPlat";
import CardAliment from "../components/CardAliment";
import HeaderNav from "../components/HeaderNav";

function GestionStock() {
  const [isAliment, setIsAliment] = useState(false);
  const isAdmin = true;
  const [typeAliment, setTypeAliment] = useState(null);
  const [typePlat, setTypePlat] = useState(null);
  var optsAliments = [];
  var optsPlats = [];

  const [plats, setPlats] = useState(null);
  const [aliments, setAliments] = useState(null);

  const [refresh, setRefresh] = useState(false);

  async function getPlats() {
    const response = await API.get("plats");
    setPlats(response.data);
    setRefresh(false);
  }
  async function getAliments() {
    const response = await API.get("aliments");
    setAliments(response.data);
    setRefresh(false);
  }

  async function getAlimentsParType() {
    const response = await API.get("aliments/type/" + typeAliment);
    setAliments(response.data);
    setRefresh(false);
  }

  async function getPlatsParType() {
    const response = await API.get("plats/type/" + typePlat);
    setPlats(response.data);
    setRefresh(false);
  }

  function getOptsAliments() {
    aliments?.forEach((ali) => {
      var op = toLowerCase(ali.type);
      latinize(op);
      optsAliments.includes(op) ? null : optsAliments.push(op);
    });
    optsAliments.sort();
  }

  function getOptsPlats() {
    plats?.forEach((p) => {
      var op = toLowerCase(p.type);
      latinize(op);
      optsPlats.includes(op) ? null : optsPlats.push(op);
    });
    optsPlats.sort();
  }

  useEffect(() => {
    if (typeAliment !== null) {
      getAlimentsParType();
    } else {
      getAliments();
    }

    if (typePlat !== null) {
      getPlatsParType();
    } else {
      getPlats();
    }
  }, [refresh]);

  if (aliments !== null) {
    getOptsAliments();
  }

  if (plats !== null) {
    getOptsPlats();
  }

  if (!plats)
    return (
      <>
        <h1>Pas de plats en stock ! 🍱</h1>
      </>
    );
  if (!aliments)
    return (
      <>
        <h1>Pas d'aliments en stock ! 🍱</h1>
      </>
    );

  return (
    <>
      <HeaderNav
        isAdmin={isAdmin}
        setIsAliment={setIsAliment}
        isAliment={isAliment}
        setRefresh={setRefresh}
        optsAliments={optsAliments}
        optsPlats={optsPlats}
        setAliments={setAliments}
        setTypeAliment={setTypeAliment}
        setTypePlat={setTypePlat}
        getAliments={aliments}
      ></HeaderNav>
      {isAliment ? (
        <div className="global">
          <div className="content-box">
            {aliments?.map((rec, index) => (
              <CardAliment
                aliment={rec}
                key={index}
                setRefresh={setRefresh}
              ></CardAliment>
            ))}
          </div>
        </div>
      ) : (
        <div className="global">
          <div className="content-box">
            {plats?.map((rec, index) => (
              <CardPlat
                isAdmin={isAdmin}
                key={index}
                plat={rec}
                setRefresh={setRefresh}
                getAliments={aliments}
              ></CardPlat>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default GestionStock;

function toLowerCase(a) {
  return (a + "").toLowerCase();
}
