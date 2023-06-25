import React, { useEffect, useState } from "react";
import "./productsSection.scss";
import ProductsGrid from "../../ProductsGrid/ProductsGrid";
import axios from "axios";
import { useStateContext } from "../../../../context/stateContext";
import { BsFilter } from "react-icons/bs";

const ProductsSection = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [brandFilters, setBrandFilters] = useState([]);
  const [categoryFilters, setCategoryFilters] = useState([]);
  const { searchText } = useStateContext();
  const [originalProductsList, setOriginalProductsList] = useState([]);
  const [brands, setBrands] = useState([]);
  const [filterOption, setfilterOption] = useState("categories");
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  useEffect(() => {
    const getAllProducts = async () => {
      const prods = await axios.get(
        `${import.meta.env.VITE_API_KEY}/api/v1/products`
      );
      setOriginalProductsList(prods.data.products);
      setProducts(prods.data.products);

      const allCategories = [
        ...new Set(
          prods.data.products.map((product) => product.category.toLowerCase())
        ),
      ];
      const allBrands = [
        ...new Set(
          prods.data.products.map((product) => product.brand.toLowerCase())
        ),
      ];
      setCategories(allCategories);
      setBrands(allBrands);
    };
    getAllProducts();
  }, []);

  useEffect(() => {
    if (searchText) {
      const filteredProducts = originalProductsList.filter((product) => {
        const lowercaseSearchText = searchText.toLowerCase();
        return (
          product.name.toLowerCase().includes(lowercaseSearchText) ||
          product.brand.toLowerCase().includes(lowercaseSearchText) ||
          product.category.toLowerCase().includes(lowercaseSearchText)
        );
      });
      setProducts(filteredProducts);
    } else {
      setProducts(originalProductsList);
    }
  }, [searchText]);

  const handleBrandFilterChange = (brand, checked) => {
    if (checked) {
      setBrandFilters((prevFilters) => [...prevFilters, brand]);
    } else {
      setBrandFilters((prevFilters) =>
        prevFilters.filter((item) => item !== brand)
      );
    }
  };

  const handleCategoryFilterChange = (category, checked) => {
    if (checked) {
      setCategoryFilters((prevFilters) => [...prevFilters, category]);
    } else {
      setCategoryFilters((prevFilters) =>
        prevFilters.filter((item) => item !== category)
      );
    }
  };

  useEffect(() => {
    let filteredProducts = originalProductsList;

    if (brandFilters.length > 0 && categoryFilters.length > 0) {
      filteredProducts = originalProductsList.filter(
        (product) =>
          brandFilters.includes(product.brand.toLowerCase()) ||
          categoryFilters.includes(product.category.toLowerCase())
      );
    } else if (brandFilters.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        brandFilters.includes(product.brand.toLowerCase())
      );
    } else if (categoryFilters.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        categoryFilters.includes(product.category.toLowerCase())
      );
    }
    console.log(filteredProducts)
    console.log(categoryFilters)
    console.log(brandFilters)
    setProducts(filteredProducts);
  }, [brandFilters, categoryFilters, originalProductsList]);

  useEffect(() => {
    if (showMobileFilter) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [showMobileFilter]);

  return (
    <div className="shop_products__section">
      <div className="choose__filter__container">
        <h3>Brand</h3>
        {brands.map((brand) => (
          <div className="filter__container" key={brand}>
            <label className="container-checkbox">
              {brand}
              <input
                type="checkbox"
                onChange={(e) =>
                  handleBrandFilterChange(brand, e.target.checked)
                }
                checked={brandFilters.includes(brand)}
              />
              <span className="checkmark"></span>
            </label>
            {/* <input
              type="checkbox"
              checked={brandFilters.includes(brand)}
              onChange={(e) => handleBrandFilterChange(brand, e.target.checked)}
            />
            <span>{brand}</span> */}
          </div>
        ))}
        <h3>Category</h3>
        {categories.map((category) => (
          <div className="filter__container" key={category}>
            <label className="container-checkbox">
              {category}
              <input
                type="checkbox"
                onChange={(e) =>
                  handleCategoryFilterChange(category, e.target.checked)
                }
                checked={categoryFilters.includes(category)}
              />
              <span className="checkmark"></span>
            </label>
            {/* <input
              type="checkbox"
              checked={categoryFilters.includes(category)}
              onChange={(e) =>
                handleCategoryFilterChange(category, e.target.checked)
              }
            /> */}
            {/* <span>{category}</span> */}
          </div>
        ))}
      </div>
      {showMobileFilter && (
        <div className="choose__filter__mobile__container">
          <div className="mobile__filter_header">
            <span>Filters</span>
            <button
              onClick={() => {
                setShowMobileFilter(false);
              }}
              className="close__button"
            >
              Close
            </button>
          </div>
          <div className="main__filter_container">
            <div className="filter__option">
              <h3
                className={filterOption === "brands" ? "active" : ""}
                onClick={() => setfilterOption("brands")}
              >
                Brand
              </h3>
              <h3
                onClick={() => setfilterOption("categories")}
                className={filterOption === "categories" ? "active" : ""}
              >
                Categories
              </h3>
            </div>
            <div className="filter__options">
              <div className="filter__items">
                {filterOption === "brands"
                  ? brands.map((brand) => {
                      return (
                        <div className="filter__container" key={brand}>
                          <input
                            type="checkbox"
                            checked={brandFilters.includes(brand)}
                            onChange={(e) =>
                              handleBrandFilterChange(brand, e.target.checked)
                            }
                          />
                          <span>{brand}</span>
                        </div>
                      );
                    })
                  : filterOption === "categories"
                  ? categories.map((category) => {
                      return (
                        <div className="filter__container" key={category}>
                          <input
                            type="checkbox"
                            checked={categoryFilters.includes(category)}
                            onChange={(e) =>
                              handleCategoryFilterChange(
                                category,
                                e.target.checked
                              )
                            }
                          />
                          <span>{category}</span>
                        </div>
                      );
                    })
                  : null}
              </div>
            </div>
          </div>
          <div className="show__results">
            <span
              onClick={() => {
                setShowMobileFilter(false);
              }}
            >
              Show {products.length} results
            </span>
          </div>
        </div>
      )}

      <h2
        onClick={() => {
          setShowMobileFilter(true);
        }}
        className="filter__mobile__button"
      >
        <BsFilter className="icon" /> Filter
      </h2>
      <ProductsGrid products={products} />
    </div>
  );
};

export default ProductsSection;
