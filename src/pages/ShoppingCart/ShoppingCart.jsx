import React, { useEffect, useState } from "react";
import "./ShoppingCart.scss";
import shirt1 from "../../assets/shirt-1.jpg";
import { GiCancel } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { client } from "../../sanity/client";
import axios from "axios";
import { useStateContext } from "../../context/stateContext";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const { qty, incQty, decQty } = useStateContext();
const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    getCartItems();
  }, []);

  const decreaseQty = async (product) => {
    const res = await axios.patch(
      `${import.meta.env.VITE_API_KEY}/api/v1/users/reduce-quantity`,
      {
        productId: product._id,
        userId: JSON.parse(localStorage.getItem("user"))._id,
      }
    );

    setCartItems((prev) =>
      prev.map((item) => {
        if (item._id === product._id) {
          item.quantity -= 1;
        }
        return item;
      })
    );
    setCartTotal(prev=>{
      return prev - product.price
    });
    decQty();
  };

  const getCartItems = async () => {
    const prods = await axios.get(
      `${import.meta.env.VITE_API_KEY}/api/v1/users/6485757dfdad724b04b6342e`
    );
    // if duplicate items, then increase quantity
    const mappedProds = prods.data.user.cart.reduce((acc, item) => {
      const existingItem = acc.find((i) => i._id === item._id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        acc.push({ ...item, quantity: 1 });
      }
      return acc;
    }, []);

    setCartItems(mappedProds);
    setCartTotal(Math.round(
      mappedProds.reduce((acc, item) => acc + item?.price*item?.quantity, 0)
    ));
    console.log(cartItems);
  };

  const increaseQuantity = async (product_id) => {
    console.log(JSON.parse(localStorage.getItem("user")));
    const userId = JSON.parse(localStorage.getItem("user"))._id;
    const res = await axios.patch(`${import.meta.env.VITE_API_KEY}/api/v1/users/cart`, {
      productId: product_id,
      userId: userId,
    });
    incQty();
    setCartItems((prev) =>
      prev.map((item) => {
        if (item._id === product_id) {
          item.quantity += 1;
        }
        return item;
      })
    );
    const product = cartItems.find((item) => item._id === product_id);
    setCartTotal(prev=>{
      return prev + product.price
    });
  };

  const removeItemFromCart = async (product_id) => {
    const res = await axios.patch(
      `${import.meta.env.VITE_API_KEY}/api/v1/users/remove-from-cart`,
      {
        productId: product_id,
        userId: JSON.parse(localStorage.getItem("user"))._id,
      }
    );
    setCartItems((prev) => prev.filter((item) => item._id !== product_id));
    const product = cartItems.find((item) => item._id === product_id);
    const total = cartTotal - product.price*product.quantity;
    setCartTotal(total);
  };

  return (
    <div className="shopping_cart__container">
      <h1>Shopping Cart</h1>
      <div className="shopping_cart">
        <div className="cart__items">
          <div className="cart_item__labels">
            <div className="cart_item__label">Product</div>
            <div className="cart_item__label">Price</div>
            <div className="cart_item__label">Quantity</div>
            <div className="cart_item__label">Total</div>
            <div className="cart_item__label">Options</div>
          </div>
          {cartItems?.map((item, i) => {
            return (
              <div key={i}>
                <div className="cart_item__container">
                  <div className="cart_item__product">
                    <img src={item?.images} alt="" />
                    <div className="cart_item__product__name">{item?.name}</div>
                  </div>
                  <div className="cart_item__price">${item?.price}</div>
                  <div className="cart_item__quantity">
                    <div className="quantity_box">
                      <button
                        className="quantity__btn"
                        onClick={() => {
                          decreaseQty(item);
                        }}
                      >
                        -
                      </button>
                      <input
                        type="text"
                        className="quantity__input"
                        value={item?.quantity}
                        onChange={() => {}}
                      />
                      <button
                        className="quantity__btn"
                        onClick={() => {
                          increaseQuantity(item?._id);
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="cart_item__total">
                    ${Math.round(item?.price * item?.quantity)}
                  </div>
                  <div className="cart_item__options">
                    <button
                      className="cart_item__option"
                      onClick={() => {
                        removeItemFromCart(item._id);
                      }}
                    >
                      <GiCancel />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="cart__summary">
          <div className="order_summary">
            <div className="subtotal">
              <h4>Subtotal</h4>
              <h4>${Math.round(cartTotal)}</h4>
            </div>
            <div className="tax">
              <h4>Tax</h4>
              <h4>0.00 EUR</h4>
            </div>
            <div className="order_total">
              <h3>Order Total</h3>
              <h3>${Math.round(cartTotal)}</h3>
            </div>
            <button>Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
