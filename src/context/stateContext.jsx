import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";
import { client } from "../sanity/client";

const Context = createContext();

export const StateContext = ({ children }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(0);
  const [user, setUser] = useState();
  const [searchText, setSearchText] = useState("");

  let foundProduct;
  let index;

  const onAdd = async (product, quantity) => {
    console.log(product);
    const newProductReference = {
      _key: uuidv4(),
      _type: "reference",
      _ref: product?._id,
    };

    console.log(user);
    await client
      .patch(user._id)
      .setIfMissing({ cart: [] }) // Ensure cart field exists if it's missing
      .insert("after", "cart[-1]", [newProductReference]) // Insert the new product at the end of the cart array
      .commit()
      .then((res) => {
        toast.success(`${qty} ${product.name} added to the cart.`);
      });

    setTotalPrice((prevTotalPrice) => prevTotalPrice + product.price);
    setCartItems([...cartItems, { ...product }]);
  };

  const incQty = () => {
    setQty((prevQty) => prevQty + 1);
  };

  const decQty = () => {
    setQty((prevQty) => {
      if (prevQty - 1 < 1) return 1;
      return prevQty - 1;
    });
  };

  const onRemove = (product) => {
    foundProduct = cartItems.find((item) => item._id === product._id);
    const newCartItems = cartItems.filter((item) => item._id !== product._id);
    setTotalPrice(
      (prevTotalPrice) =>
        prevTotalPrice - foundProduct.price * foundProduct.quantity
    );
    setTotalQuantities(
      (prevTotalQuantities) => prevTotalQuantities - foundProduct.quantity
    );
    setCartItems(newCartItems);
  };

  const toggleCartItemQuanitity = (id, value) => {
    foundProduct = cartItems.find((item) => item._id === id);
    index = cartItems.findIndex((product) => product._id === id);
    const newCartItems = cartItems.filter((item) => item._id !== id);

    if (value === "inc") {
      setCartItems([
        ...newCartItems,
        { ...foundProduct, quantity: foundProduct.quantity + 1 },
      ]);
      setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price);
      setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
    } else if (value === "dec") {
      if (foundProduct.quantity > 1) {
        setCartItems([
          ...newCartItems,
          { ...foundProduct, quantity: foundProduct.quantity - 1 },
        ]);
        setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price);
        setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
      }
    }
  };

  const setUserDetails = async (user) => {
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
  };



  return (
    <Context.Provider
      value={{
        showCart,
        qty,
        totalPrice,
        totalQuantities,
        cartItems,
        user,
        searchText,
        incQty,
        decQty,
        onAdd,
        setShowCart,
        toggleCartItemQuanitity,
        onRemove,
        setCartItems,
        setTotalPrice,
        setTotalQuantities,
        setUserDetails,
        setSearchText,
        setQty
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
