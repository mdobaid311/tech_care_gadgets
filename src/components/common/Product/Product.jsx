import React from "react";
import "./Product.scss";
import { AiOutlineHeart } from "react-icons/ai";
import { client, urlFor } from "../../../sanity/client";
import { v4 as uuidv4 } from "uuid";
import { useStateContext } from "../../../context/stateContext";
import { Link } from "react-router-dom";
import axios from "axios";

const Product = ({ product }) => {
  const { incQty} = useStateContext();

  const onAddToCart = async (product) => {
    console.log(JSON.parse(localStorage.getItem('user')))
    const userId  =  JSON.parse(localStorage.getItem('user'))._id
    const res = await axios.patch(`${import.meta.env.VITE_API_KEY}/api/v1/users/cart`,{
      productId: product._id,
      userId : userId,
    })
    incQty()
    console.log(res.data.message)
  };

  const addToCart = async() => {
   
  }


  return (
    <Link to={`/shop/${product._id}`} className="product" key={product._id}>
      <div className="product__image">
        {product?.images[0] && (
          <img
            src={
              product?.images[0]
                ? product.images[0]
                : "https://img.freepik.com/premium-vector/smartphone-blank-screen-phone-mockup_172533-421.jpg?w=2000"
            }
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
    </Link>
  );
};

export default Product;
