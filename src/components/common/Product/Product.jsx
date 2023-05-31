import React from "react";
import "./Product.scss";
import { AiOutlineHeart } from "react-icons/ai";
import { client, urlFor } from "../../../sanity/client";
import { v4 as uuidv4 } from "uuid";
import { useStateContext } from "../../../context/stateContext";

const Product = ({ product }) => {
  const { onAdd } = useStateContext();

  const onAddToCart = async (product) => {
    onAdd(product, 1);
  };

  return (
    <div className="product" key={product.id}>
      <div className="product__image">
        {product?.imageUrl[0] && (
          <img
            src={product?.imageUrl[0] ? product.imageUrl[0] : ""}
            alt="no image"
          />
        )}
        <div className="add_to_cart__container">
          <button
            className="cart__button"
            onClick={() => {
              onAddToCart(product);
            }}
          >
            Add to cart
          </button>
          <button className="save__button">
            <AiOutlineHeart className="icon" size={15} />
            Save
          </button>
        </div>
      </div>
      <div className="product__details">
        <div className="product__category">{product?.category}</div>
        <div className="product__name"> {product?.name} </div>
        <div className="product__price"> {product?.price}USD</div>
      </div>
    </div>
  );
};

export default Product;
