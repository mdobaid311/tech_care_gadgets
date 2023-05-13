import React from "react";
import "./ProductsSection.scss";
import ProductsGrid from "../../ProductsGrid/ProductsGrid";

const ProductsSection = () => {
  return (
    <div className="products__section">
      <div className="choose__filter__container">
        <h3>Shop Some Wear:</h3>
        <div className="filter__container">
          <input type="checkbox" />
          <span>Best sellers</span>
        </div>
        <div className="filter__container">
          <input type="checkbox" />
          <span>New Arrivals</span>
        </div>
        <div className="filter__container">
          <input type="checkbox" />
          <span>top Men</span>
        </div>
        <div className="filter__container">
          <input type="checkbox" />
          <span>Trending</span>
        </div>
        <div className="filter__container">
          <input type="checkbox" />
          <span>top Men</span>
        </div>
        <div className="filter__container">
          <input type="checkbox" />
          <span>Trending</span>
        </div>
      </div>
      <ProductsGrid />
    </div>
  );
};

export default ProductsSection;
