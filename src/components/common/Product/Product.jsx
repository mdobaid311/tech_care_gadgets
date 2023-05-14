import React from "react";
import "./Product.scss";
import { AiOutlineHeart } from "react-icons/ai";

const Product = ({ product }) => {
  return (
    <div className="product" key={product.id}>
      <div className="product__image">
        <img src={product.image} alt="" />
        <div className="add_to_cart__container">
          <button className="cart__button">Add to cart</button>
          <button className="save__button">
            <AiOutlineHeart className="icon" size={15} />
            Save
          </button>
        </div>
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
