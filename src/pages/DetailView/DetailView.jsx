import React, { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import "./DetailView.scss";
import { useParams } from "react-router-dom";
import { client } from "../../sanity/client";
 

const DetailView = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    client
      .fetch(
        `*[_type == "product" && _id=="${id}"]{_id,name, price,brand, category,"imageUrl": image[].asset->url
      }`
      )
      .then((data) => {
        setProduct(data[0]);
        setSelectedImage(data[0].imageUrl[0]);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="detail_view__container">
      <div className="detail_view__images">
        <div className="thumbnails">
          {product?.imageUrl?.map((image) => {
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

        <h3>Select Size</h3>
        <div className="sizes__container">
          <div className="size__box selected__size">XS</div>
          <div className="size__box">S</div>
          <div className="size__box">M</div>
          <div className="size__box">L</div>
          <div className="size__box">XL</div>
          <div className="size__box">XXL</div>
        </div>
        <h3>Select Color</h3>
        <div className="colors__container">
          <div className="color__box selected__color">
            <div
              className="color__box__inner"
              style={{
                backgroundColor:
                  "#" +
                  ((Math.random() * 0xffffff) << 0)
                    .toString(16)
                    .padStart(6, "0"),
              }}
            ></div>
          </div>
          <div className="color__box ">
            <div
              className="color__box__inner"
              style={{
                backgroundColor:
                  "#" +
                  ((Math.random() * 0xffffff) << 0)
                    .toString(16)
                    .padStart(6, "0"),
              }}
            ></div>
          </div>
          <div className="color__box ">
            <div
              className="color__box__inner"
              style={{
                backgroundColor:
                  "#" +
                  ((Math.random() * 0xffffff) << 0)
                    .toString(16)
                    .padStart(6, "0"),
              }}
            ></div>
          </div>
          <div className="color__box ">
            <div
              className="color__box__inner"
              style={{
                backgroundColor:
                  "#" +
                  ((Math.random() * 0xffffff) << 0)
                    .toString(16)
                    .padStart(6, "0"),
              }}
            ></div>
          </div>
          <div className="color__box ">
            <div
              className="color__box__inner"
              style={{
                backgroundColor:
                  "#" +
                  ((Math.random() * 0xffffff) << 0)
                    .toString(16)
                    .padStart(6, "0"),
              }}
            ></div>
          </div>
          <div className="color__box ">
            <div
              className="color__box__inner"
              style={{
                backgroundColor:
                  "#" +
                  ((Math.random() * 0xffffff) << 0)
                    .toString(16)
                    .padStart(6, "0"),
              }}
            ></div>
          </div>
          <div className="color__box ">
            <div
              className="color__box__inner"
              style={{
                backgroundColor:
                  "#" +
                  ((Math.random() * 0xffffff) << 0)
                    .toString(16)
                    .padStart(6, "0"),
              }}
            ></div>
          </div>
          <div className="color__box ">
            <div
              className="color__box__inner"
              style={{
                backgroundColor:
                  "#" +
                  ((Math.random() * 0xffffff) << 0)
                    .toString(16)
                    .padStart(6, "0"),
              }}
            ></div>
          </div>
        </div>
        <div className="quantity_and__total">
          <div className="quantity">
            <h3>Quantity</h3>
            <div className="quantity_box">
              <button className="quantity__btn">-</button>
              <input type="text" className="quantity__input" />
              <button className="quantity__btn">+</button>
            </div>
          </div>
          <div className="total__price">
            <h3>Total Price</h3>
            <h3>{product?.price} USD</h3>
          </div>
        </div>
        <div className="detail_view__buttons">
          <button className="cart__button">Add to cart</button>
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
