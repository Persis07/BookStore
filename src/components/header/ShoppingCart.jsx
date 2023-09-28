import React, { useContext } from 'react';
import './ShoppingCart.css';
import { Context } from "../../context/CreateContext";

function ShoppingCart() {
  const { cartItems } = useContext(Context);

  return (
    <div className='shoppingCart-container'>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your shopping cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ShoppingCart;
