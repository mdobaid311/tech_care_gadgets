import React from "react";
import "./Product.scss";

const Product = ({ product } ) => {
  return (
    <div className="product" key={product.id}>
      <div className="product__image">
        <img src={product.image} alt="" />
      </div>
      <div className="product__details">
        <div className="product__category">{product.category}</div>
        <div className="product__name"> {product.name} </div>
        <div className="product__price"> {product.price}USD</div>
      </div>
    </div>
  );
};

export default Product;
