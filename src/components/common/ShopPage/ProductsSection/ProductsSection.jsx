import React from "react";
import "./productsSection.scss";
import ProductsGrid from "../../ProductsGrid/ProductsGrid";

const ProductsSection = () => {
  return (
    <div className="products__section">
      <div className="choose__filter__container">
        <h3>Brand</h3>
        <div className="filter__container">
          <input type="checkbox" />
          <span>ZARA</span>
        </div>
        <div className="filter__container">
          <input type="checkbox" />
          <span>GUCCI</span>
        </div>
        <div className="filter__container">
          <input type="checkbox" />
          <span>CHANEL</span>
        </div>
        <div className="filter__container">
          <input type="checkbox" />
          <span>LV</span>
        </div>
        <div className="filter__container">
          <input type="checkbox" />
          <span>DIOR</span>
        </div>
        <div className="filter__container">
          <input type="checkbox" />
          <span>Trending</span>
        </div>
        <h3>SIZES</h3>
        <div className="sizes__container">
          <div className="size__box selected__size">XS</div>
          <div className="size__box">S</div>
          <div className="size__box">M</div>
          <div className="size__box">L</div>
          <div className="size__box">XL</div>
          <div className="size__box">XXL</div>
        </div>
        <h3>Color</h3>
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
        <h3>Price Range</h3>
        <div className="price__range__container">
          <input type="range" />
        </div>
      </div>

      <ProductsGrid />
    </div>
  );
};

export default ProductsSection;
