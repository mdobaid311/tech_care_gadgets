import React, { useEffect, useState } from "react";
import "./ShoppingCart.scss";
import shirt1 from "../../assets/shirt-1.jpg";
import { GiCancel } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { client } from "../../sanity/client";

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);

  

  useEffect(() => {
    client
      .fetch(
        `*[_type == "user" && email=='mdobaid311@gmail.com']{_id,_ref,name, email,address,phoneNumber ,orders,cart[]->{..., "imageUrl": image[0].asset->url},"imageUrl": image[].asset->url}`
      )
      .then((data) => {
        setCartItems(data[0].cart);
      });
  }, [cartItems]);

  const removeFromCart = async (product) => {
    const productReference = {
      _key: product._key,
      _type: "reference",
      _ref: product._id,
    };
    // await client
    //   .patch(user.user._id)
    //   .unset([`cart[_ref=="${product._id}"]`])
    //   .commit();

    setCartItems((prev) => prev.filter((item) => item._id !== product._id));
    console.log(cartItems);
    console.log("Product removed from cart successfully!");
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
                    <img src={item?.imageUrl} alt="" />
                    <div className="cart_item__product__name">{item?.name}</div>
                  </div>
                  <div className="cart_item__price">${item?.price}</div>
                  <div className="cart_item__quantity">1</div>
                  <div className="cart_item__total">${item?.price}</div>
                  <div className="cart_item__options">
                    <button
                      className="cart_item__option"
                      onClick={() => {
                        removeFromCart(item);
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
              <h4>120.00 EUR</h4>
            </div>
            <div className="tax">
              <h4>Tax</h4>
              <h4>0.00 EUR</h4>
            </div>
            <div className="order_total">
              <h3>Order Total</h3>
              <h3>120.00 EUR</h3>
            </div>
            <button>Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
