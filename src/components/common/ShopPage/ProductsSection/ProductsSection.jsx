import React, { useEffect, useState } from "react";
import "./productsSection.scss";
import ProductsGrid from "../../ProductsGrid/ProductsGrid";
import { client } from "../../../../sanity/client";

const ProductsSection = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [brandFilter, setBrandFilter] = useState([]);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    client
      .fetch(`*[_type == "product"]{ brand }`)
      .then((result) => {
        const uniqueBrands = [
          ...new Set(result.map((product) => product.brand)),
        ];
        setBrands(uniqueBrands);
        console.log(uniqueBrands);
      })
      .catch(console.error);

    if (products.length === 0) {
      if (categories.length > 0) {
        filterCategory(categories);
      } else if (brandFilter.length > 0) {
        filterBrand(brandFilter);
      } else {
        getAllProducts();
      }
    }
  }, [products, categories, brandFilter]);

  const filterCategory = (categories) => {
    console.log(
      `*[_type == 'product' && category in ["${categories.join(
        '", "'
      )}"]]{_id,name, price, category,"imageUrl": image[].asset->url}`
    );
    client
      .fetch(
        `*[_type == 'product' && category in ["${categories.join(
          '", "'
        )}"]]{_id,name, price, category,"imageUrl": image[].asset->url}
      `
      )
      .then((result) => {
        setProducts(result);
        console.log(result);
      })
      .catch(console.error);
  };

  const filterBrand = (brand) => {
    console.log(
      `*[_type == 'product' && brand in ["${brand.join(
        '", "'
      )}"]]{_id,name, price, category,"imageUrl": image[].asset->url}`
    );
    client
      .fetch(
        `*[_type == 'product' && brand in ["${brand.join(
          '", "'
        )}"]]{_id,name, price, category,"imageUrl": image[].asset->url}
      `
      )
      .then((result) => {
        setProducts(result);
        console.log(result);
      })
      .catch(console.error);
  };

  const getAllProducts = async () => {
    await client
      .fetch(
        `*[_type == "product"]{_id,name, price, category,"imageUrl": image[].asset->url}`
      )
      .then((products) => {
        setProducts(products);
      })
      .catch(console.error);
  };

  return (
    <div className="shop_products__section">
      <div className="choose__filter__container">
        <h3>Brand</h3>

        {brands?.map((product) => {
          return (
            <div className="filter__container" key={product}>
              <input
                type="checkbox"
                onChange={(e) => {
                  console.log(e.target.checked);
                  if (e.target.checked) {
                    setBrandFilter((prev) => [...prev, product]);
                    filterBrand([...brandFilter, product]);
                  } else {
                    setBrandFilter((prev) =>
                      prev.filter((cat) => cat !== product)
                    );
                    filterBrand(brandFilter.filter((cat) => cat !== product));
                  }
                }}
              />
              <span>{product}</span>
            </div>
          );
        })}
        <h3>Category</h3>
        <div className="filter__container">
          <input
            type="checkbox"
            onChange={(e) => {
              console.log(e.target.checked);
              if (e.target.checked) {
                setCategories((prev) => [...prev, "mobiles"]);
                filterCategory([...categories, "mobiles"]);
              } else {
                setCategories((prev) =>
                  prev.filter((cat) => cat !== "mobiles")
                );
                filterCategory(categories.filter((cat) => cat !== "mobiles"));
              }
            }}
          />
          <span>Mobile</span>
        </div>
        <div className="filter__container">
          <input
            type="checkbox"
            onChange={(e) => {
              console.log(e.target.checked);
              if (e.target.checked) {
                setCategories((prev) => [...prev, "acessories"]);
                filterCategory([...categories, "acessories"]);
              } else {
                setCategories((prev) =>
                  prev.filter((cat) => cat !== "acessories")
                );
                filterCategory(
                  categories.filter((cat) => cat !== "acessories")
                );
              }
            }}
          />
          <span>Acessories</span>
        </div>
        {/* <h3>Price Range</h3> */}
        {/* <div className="price__range__container">
          <input type="range" />
        </div> */}
      </div>
      <ProductsGrid products={products} />
    </div>
  );
};

export default ProductsSection;
