import React from "react";
import { useState } from "react";

import CardPlat from "../components/CardPlat";
import CardAliment from "../components/CardAliment";
import HeaderNav from "../components/HeaderNav";

function GestionStock() {
  const [isAliment, setIsAliment] = useState(false);
  const isAdmin = true;

  const resultAli = [
    { id: 1, nom: "Ocean", quantity: 5, type: "viande" },
    { id: 2, nom: "Blue", quantity: 3, type: "viande" },
    { id: 3, nom: "Purple", quantity: 5, type: "viande" },
    { id: 4, nom: "Red", quantity: 9, type: "viande" },
    { id: 5, nom: "Orange", quantity: 45, type: "viande" },
    { id: 6, nom: "Yellow", quantity: 4, type: "viande" },
    { id: 7, nom: "Green", quantity: 6, type: "viande" },
    { id: 8, nom: "Forest", quantity: 3, type: "viande" },
    { id: 9, nom: "Slate", quantity: 33, type: "viande" },
    { id: 10, nom: "Silver", quantity: 55, type: "viande" },
  ];

  const resultPlats = [
    {
      id: 1,
      nom: "Ocean",
      price: 5,
      alts: [
        { nom: "salade", quantity: 2, id: 1 },
        { nom: "tomate", quantity: 5, id: 2 },
        { nom: "oignon", quantity: 1, id: 3 },
      ],
    },
    {
      id: 2,
      nom: "Blue",
      price: 3,
      alts: [
        { nom: "salade", quantity: 2, id: 11 },
        { nom: "tomate", quantity: 5, id: 22 },
        { nom: "oignon", quantity: 1, id: 33 },
      ],
    },
    {
      id: 3,
      nom: "Purple",
      price: 5,
      alts: [
        { nom: "salade", quantity: 2, id: 10 },
        { nom: "tomate", quantity: 5, id: 21 },
        { nom: "oignon", quantity: 1, id: 32 },
      ],
    },
    {
      id: 4,
      nom: "Red",
      price: 9,
      alts: [
        { nom: "salade", quantity: 2, id: 13 },
        { nom: "tomate", quantity: 5, id: 23 },
        { nom: "oignon", quantity: 1, id: 34 },
      ],
    },
    {
      id: 5,
      nom: "Orange",
      price: 45,
      alts: [
        { nom: "salade", quantity: 2, id: 12 },
        { nom: "tomate", quantity: 5, id: 25 },
        { nom: "oignon", quantity: 1, id: 36 },
      ],
    },
  ];

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
            {resultAli?.map((rec) => (
              <CardAliment aliment={rec} key={rec.id}></CardAliment>
            ))}
          </div>
        </div>
      ) : (
        <div className="global">
          <div className="content-box">
            {resultPlats?.map((rec) => (
              <CardPlat isAdmin={isAdmin} key={rec.id} plat={rec}></CardPlat>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default GestionStock;
