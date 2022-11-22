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

  const [listAliment, setListAliment] = useState(null);
  const quantiteParIdAliment = new Map();

  async function getAliments() {
    const response = await API.get("aliments");
    setListAliment(response.data);
  }

  listAliment?.map((ali) => {
    quantiteParIdAliment.set(ali._id, {
      quantite: ali.quantite,
      type: ali.type,
    });
  });

  function GetIsCommandable(plat) {
    var isCommandable = false;
    const listIsCommandable = [];

    plat.aliments.map((ali) => {
      if (!quantiteParIdAliment.has(ali.idAliment)) {
        listIsCommandable.push(false);
      } else {
        var qteAliment = quantiteParIdAliment.get(ali.idAliment).quantite;

        if (qteAliment === 0 || qteAliment === null) {
          listIsCommandable.push(false);
        } else if (ali.quantite > qteAliment) {
          listIsCommandable.push(false);
        } else if (ali.quantite <= qteAliment) {
          listIsCommandable.push(true);
        }
      }
    });

    if (listIsCommandable.includes(false)) {
      isCommandable = false;
    } else {
      isCommandable = true;
    }

    return isCommandable;
  }

  useEffect(() => {
    if (typePlat !== null) {
      getPlatsParType();
    } else {
      getPlats();
    }
    getAliments();
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
              setRefresh={setRefresh}
              isCommandable={GetIsCommandable(rec)}
              quantiteParIdAliment={quantiteParIdAliment}
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
