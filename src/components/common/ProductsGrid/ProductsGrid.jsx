import React from "react";
import "./ProductsGrid.scss";
import Product from "../Product/Product";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { client } from "../../../sanity/client";

const ProductsGrid = () => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "product"]{_id,name, price, category,"imageUrl": image[].asset->url
    }`
      )
      .then((products) => {
        setProducts(products);
        console.log(products);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="products__grid">
      <div className="products">
        {products?.map((product) => {
          return (
            <Link key={product._id} to={`/shop/${product._id}`}>
              <Product product={product} key={product.id} />
            </Link>
          );
        })}
      </div>
      {/* <button>Load More</button> */}
    </div>
  );
};

export default ProductsGrid;
