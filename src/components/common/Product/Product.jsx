import React from "react";
import "./Product.scss";
import { AiOutlineHeart } from "react-icons/ai";
import { client, urlFor } from "../../../sanity/client";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const Product = ({ product }) => {
  const user = useSelector((state) => state.user);

  const onAddToCart = async (product) => {
    const userEmail = "mdobaid311@gmail.com"; // Replace with the user's email

    const userResponse = await client.fetch(
      `*[_type == "user" && email == '${userEmail}']{_id, cart}`
    );
    const user = userResponse[0];

    const newProductReference = {
      _key: uuidv4(),
      _type: "reference",
      _ref: product?._id,
    };

    const updatedCart = user.cart.map((item) => {
      if (!item._key) {
        return { ...item, _key: uuidv4() };
      }
      return item;
    });

    const updatedCartWithNewProduct = [...updatedCart, newProductReference];

    await client
      .patch(user._id)
      .set({ cart: updatedCartWithNewProduct })
      .commit();
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
