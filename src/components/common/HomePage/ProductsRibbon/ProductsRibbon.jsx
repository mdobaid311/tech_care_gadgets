import React, { useEffect } from "react";
import "./ProductsRibbon.scss";
import { useState } from "react";
import { client } from "../../../../sanity/client";
import Product from "../../Product/Product";
import { Link } from "react-router-dom";

const ProductsRibbon = ({ title }) => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "product"]{_id,name, price, category,"imageUrl": image[].asset->url
    }`
      )
      .then((products) => {
        setProducts(products);
        // console.log(products);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="products__ribbon">
      <h1>{title}</h1>
      <div className="products">
        {products?.map((product) => {
          return (
            <Link key={product._id} to={`/shop/${product._id}`}>
              <Product product={product} key={product.id} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsRibbon;
