import { useState } from "react";

function Card() {
  return (
    <>
      <article>
        <div>
          <hgroup>
            <h2>Pomme</h2>
            <h3>Liste d'ingrédients</h3>
          </hgroup>
        </div>
        <div className="price">
          <p>8 €</p>
        </div>
        <div>
          <button>Commander</button>
        </div>
      </article>
    </>
  );
}

export default Card;
