import React from "react";
import "./ProductsGrid.scss";
import shirt1 from "../../../assets/shirt-1.jpg";
import shirt2 from "../../../assets/shirt-2.jpg";
import shirt3 from "../../../assets/shirt-3.jpg";

const ProductsGrid = () => {
  const products = [
    {
      id: 1,
      category: "Top Men",
      name: "Zara Blue Shirt",
      price: 120,
      image: shirt1,
    },
    {
      id: 2,
      category: "Top Men",
      name: "Zara Beach Shirt",
      price: 220,
      image: shirt2,
    },
    {
      id: 3,
      category: "Top Men",
      name: "Zara Blue Shirt",
      price: 120,
      image: shirt3,
    },
    {
      id: 4,
      category: "Top Men",
      name: "Zara Beach Shirt",
      price: 220,
      image: shirt1,
    },
    {
      id: 5,
      category: "Top Men",
      name: "Zara Red T-shirt",
      price: 150,
      image: shirt2,
    },
    {
      id: 6,
      category: "Top Men",
      name: "Zara Beach Shirt",
      price: 220,
      image: shirt3,
    },
    {
      id: 7,
      category: "Top Men",
      name: "Zara Red T-shirt",
      price: 150,
      image: shirt1,
    },
    {
      id: 8,
      category: "Top Men",
      name: "Zara Red T-shirt",
      price: 150,
      image: shirt1,
    },
  ];

  return (
    <div className="products__grid">
      {products.map((product) => {
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
      })}
    </div>
  );
};

export default ProductsGrid;
