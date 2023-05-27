import React from "react";
import "./ProductsGrid.scss";
import Product from "../Product/Product";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { client } from "../../../sanity/client";

const ProductsGrid = ({ products }) => {
  return (
    <div className="products__grid">
      <div className="products">
        {products?.map((product) => {
          return <Product product={product} key={product?._id} />;
        })}
      </div>
      {/* <button>Load More</button> */}
    </div>
  );
};

export default ProductsGrid;
