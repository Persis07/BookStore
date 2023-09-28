import React, { useContext } from 'react';
import './ShoppingCart.css';
import Button from "../Button";
import { Context } from "../../context/CreateContext";
import GameOfThronesImage from "../../assets/GameOfThrones.png";
import ClashOfKingsImage from "../../assets/ClashOfKings.png";
import StormOfSwordsImage from "../../assets/StormOfSwords.png";
import HedgeKnightImage from "../../assets/HedgeKnight.png";
import FeastForCrowsImage from "../../assets/FeastForCrows.png";
import SwornSwordImage from "../../assets/SwornSword.png";
import MysteryKnightImage from "../../assets/MysteryKnight.png";
import DanceWithDragonsImage from "../../assets/DanceWithDragons.png";



function ShoppingCart() {
  const { books2, cartItems } = useContext(Context);

  const bookData = {
    "A Game of Thrones": {
      image: GameOfThronesImage,
      price: "$9.24",
    },
    "A Clash of Kings": {
      image: ClashOfKingsImage,
      price: "$9.24",
    },
    "A Storm Of Swords": {
      image: StormOfSwordsImage,
      price: "$9.24",
    },
    "The Hedge Knight": {
      image: HedgeKnightImage,
      price: "$9.24",
    },
    "A Feast For Crows": {
      image: FeastForCrowsImage,
      price: "$9.24",
    },
    "The Sworn Sword": {
      image: SwornSwordImage,
      price: "$9.24",
    },
    "The Mystery Knight": {
      image: MysteryKnightImage,
      price: "$9.24",
    },
    "A Dance with Dragons": {
      image: DanceWithDragonsImage,
      price: "$9.24",
    },
  };

  const totalPrice = cartItems.reduce((total, item) => {
    return total + parseFloat(bookData[item].price.replace('$', ''));
  }, 0);

  return (
    <div className='shoppingCart-container'>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your shopping cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <div className="cart-item">
                  <img src={bookData[item].image} alt={`${item} Cover`} />
                  <div>
                    <h3>{item}</h3>
                    <p>Price: {bookData[item].price}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <p style={{fontSize: "20px", backgroundColor: "#CBB26A",
          padding: "5px"}}>Total Price: ${totalPrice.toFixed(2)}</p>
          <Button 
          buttonText="Buy Books"
          className="backBTN"
          onClick={() => handleBuy(cartItems, totalPrice)}>
          </Button>
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;
