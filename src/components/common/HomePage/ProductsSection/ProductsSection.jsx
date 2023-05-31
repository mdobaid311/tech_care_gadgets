import React from "react";
import "./ProductsSection.scss";
import ProductsGrid from "../../ProductsGrid/ProductsGrid";

const ProductsSection = ({ products }) => {
  return (
    <div className="products__section">
      <h1>Featured Products</h1>
      <div className="products__section_products_grid">
        <div className="choose__filter__container">
          <h3>Shop Some Tech:</h3>
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
            <span>Top Sold</span>
          </div>
          <div className="filter__container">
            <input type="checkbox" />
            <span>Trending</span>
          </div>
        </div>
        <ProductsGrid products={products} />
      </div>
    </div>
  );
};

export default ProductsSection;
