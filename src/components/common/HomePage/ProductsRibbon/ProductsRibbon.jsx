import React, { useEffect } from "react";
import "./ProductsRibbon.scss";
import { useState } from "react";
import { client } from "../../../../sanity/client";
import Product from "../../Product/Product";
import { Link } from "react-router-dom";
import axios from "axios";


const ProductsRibbon = ({ title }) => {
  const [products, setProducts] = useState(null);

  useEffect(  () => {
    getAllProducts()
  }, []);

 
  const getAllProducts = async () => {
    const prods = await axios.get('http://localhost:5000/api/v1/products')
    setProducts(prods.data.products)
  };


  return (
    <div className="products__ribbon">
      <h1>{title}</h1>
      <div className="products">
        {products?.map((product) => {
          return <Product product={product} key={product._id} />;
        })}
      </div>
    </div>
  );
};

export default ProductsRibbon;
