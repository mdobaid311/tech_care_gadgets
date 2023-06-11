import React, { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import "./DetailView.scss";
import { useParams } from "react-router-dom";
import { client } from "../../sanity/client";
import axios from "axios";

const DetailView = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [productQty, setProductQty] = useState(0);

  useEffect(() => {
    getSingleProduct();
  }, []);

  const getSingleProduct = async () => {
    const prod = await axios.get(`http://localhost:5000/api/v1/products/${id}`);
    console.log(prod.data.product);
    setProduct(prod.data.product);
    setSelectedImage(prod.data.product.images[0]);
  };

  const setQuantity = (value) => {
    setProductQty(value);
  };

  const addToCart = async() => {
    const userId  =  '6476ebccf3829374ec7de89b'
    const res = await axios.patch('http://localhost:5000/api/v1/users/cart',{
      productId: id,
      userId : userId,
    })
  }

  return (
    <div className="detail_view__container">
      <div className="detail_view__images">
        <div className="thumbnails">
          {product?.images?.map((image) => {
            return (
              <img
                onClick={() => setSelectedImage(image)}
                src={image}
                alt="no image"
                key={image}
              />
            );
          })}
        </div>
        <div className="preview">
          {selectedImage && (
            <img src={selectedImage ? selectedImage : ""} alt="no image" />
          )}
        </div>
      </div>
      <div className="detail_view__detail">
        <span className="brand__name">{product?.brand}</span>
        <h1 className="product__title">{product?.name}</h1>

        <div className="quantity_and__total">
          <div className="quantity">
            <h3>Quantity</h3>
            <div className="quantity_box">
              <button
                className="quantity__btn"
                onClick={() => {
                  if (productQty > 0) {
                    setQuantity(productQty - 1);
                  }
                }}
              >
                -
              </button>
              <input
                type="text"
                className="quantity__input"
                value={productQty}
                onChange={() => {}}
              />
              <button
                className="quantity__btn"
                onClick={() => {
                  setQuantity(productQty + 1);
                }}
              >
                +
              </button>
            </div>
          </div>
          <div className="total__price">
            <h3>Total Price</h3>
            <h3>{product?.price} USD</h3>
          </div>
        </div>
        <div className="detail_view__buttons">
          <button className="cart__button" onClick={addToCart}>Add to cart</button>
          <button className="save__button">
            <AiOutlineHeart className="icon" size={15} />
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailView;
