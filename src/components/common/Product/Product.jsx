import React from "react";
import "./Product.scss";
import { AiOutlineHeart } from "react-icons/ai";
import { client, urlFor } from "../../../sanity/client";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const onAddToCart = async (product) => {
    const newProductReference = {
      _key: uuidv4(),
      _type: "reference",
      _ref: product?._id,
    };

    console.log(user)
    await client
      .patch(user.user._id)
      .setIfMissing({ cart: [] }) // Ensure cart field exists if it's missing
      .insert("after", "cart[-1]", [newProductReference]) // Insert the new product at the end of the cart array
      .commit();

    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
    console.log("Product added to cart successfully!");
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
