import React from "react";
import "./ShoppingCart.scss";
import shirt1 from "../assets/shirt-1.jpg";
import { GiCancel } from "react-icons/gi";

const ShoppingCart = () => {
  return (
    <div className="shopping_cart__container">
      <h1>Shopping Cart</h1>
      <div className="shopping_cart">
        <div className="cart__items">
          <div className="cart_item__labels">
            <div className="cart_item__label">Product</div>
            <div className="cart_item__label">Price</div>
            <div className="cart_item__label">Size</div>
            <div className="cart_item__label">Quantity</div>
            <div className="cart_item__label">Total</div>
            <div className="cart_item__label">Options</div>
          </div>
          <div className="cart_item__container">
            <div className="cart_item__product">
              <img src={shirt1} alt="" />
              <div className="cart_item__product__name">
                Ocean White T-shirt
              </div>
            </div>
            <div className="cart_item__price">$ 50.00</div>
            <div className="cart_item__size">M</div>
            <div className="cart_item__quantity">1</div>
            <div className="cart_item__total">$ 50.00</div>
            <div className="cart_item__options">
              <button className="cart_item__option">
                <GiCancel />
              </button>
            </div>
          </div>
          <div className="cart_item__container">
            <div className="cart_item__product">
              <img src={shirt1} alt="" />
              <div className="cart_item__product__name">
                Ocean White T-shirt
              </div>
            </div>
            <div className="cart_item__price">$ 50.00</div>
            <div className="cart_item__size">M</div>
            <div className="cart_item__quantity">1</div>
            <div className="cart_item__total">$ 50.00</div>
            <div className="cart_item__options">
              <button className="cart_item__option">
                <GiCancel />
              </button>
            </div>
          </div>
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
