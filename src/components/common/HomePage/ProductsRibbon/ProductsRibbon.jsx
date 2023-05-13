import React from "react";
import "./ProductsRibbon.scss";

import shirt1 from "../../../../assets/shirt-1.jpg";
import shirt2 from "../../../../assets/shirt-2.jpg";
import shirt3 from "../../../../assets/shirt-3.jpg";
import Product from "../../Product/Product";

const ProductsRibbon = ({title}) => {
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
    <div className="products__ribbon">
      <h1>{title}</h1>
      <div className="products">
        {products.map((product) => {
          return <Product product={product} key={product.id} />;
        })}
      </div>
    </div>
  );
};

export default ProductsRibbon;
