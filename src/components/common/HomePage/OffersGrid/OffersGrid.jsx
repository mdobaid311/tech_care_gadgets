import React from "react";
import "./OffersGrid.scss";

const OffersGrid = () => {
  return (
    <div className="offers_grid">
      <div className="offers_grid__item_1">
        <div className="offer__content">
          <h1>Upto 40% Off</h1>
          <span>Special offers and great Deals</span>
          <button>SEE OFFERS</button>
        </div>
      </div>
      <div className="offers_grid__item_2">
        <div className="offer__content">
          <h1>Choose Your Acessories</h1>
          <span>See our collections</span>
          <button>SEE OFFERS</button>
        </div>
      </div>
      <div className="offers_grid__item_3">
        <div className="offer__content">
          <h1>Brand New Style</h1>
          <span>Popular Brands</span>
          <button>SEE OFFERS</button>
        </div>
      </div>
    </div>
  );
};

export default OffersGrid;
