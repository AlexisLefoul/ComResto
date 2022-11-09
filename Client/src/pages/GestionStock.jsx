import React from "react";
import { useState } from "react";
import latinize from "latinize";

import API from "../app";
import CardPlat from "../components/CardPlat";
import CardAliment from "../components/CardAliment";
import HeaderNav from "../components/HeaderNav";

function GestionStock() {
  const [isAliment, setIsAliment] = useState(false);
  const isAdmin = true;
  const [typeAliment, setTypeAliment] = useState(null);
  var optsAliments = [];

  const [plats, setPlats] = React.useState(null);
  const [aliments, setAliments] = React.useState(null);

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
    console.log(typeAliment);
    const response = await API.get("aliments/type/" + typeAliment);
    setAliments(response.data);
    setRefresh(false);
  }

  function getOptsAliment() {
    aliments?.forEach((ali) => {
      var op = toLowerCase(ali.type);
      latinize(op);
      optsAliments.includes(op) ? null : optsAliments.push(op);
    });
    optsAliments.sort();
  }

  React.useEffect(() => {
    getPlats();
    if (typeAliment !== null) {
      getAlimentsParType();
    } else {
      getAliments();
    }
  }, [refresh]);

  if (aliments !== null) {
    getOptsAliment();
  }

  if (!plats) return null;
  if (!aliments) return null;

  return (
    <>
      <HeaderNav
        isAdmin={isAdmin}
        setIsAliment={setIsAliment}
        isAliment={isAliment}
        setRefresh={setRefresh}
        optsAliments={optsAliments}
        setAliments={setAliments}
        setTypeAliment={setTypeAliment}
      ></HeaderNav>
      {isAliment ? (
        <div className="global">
          <div className="content-box">
            {aliments?.map((rec) => (
              <CardAliment
                aliment={rec}
                key={rec.id}
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
