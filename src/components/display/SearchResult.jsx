import React, { useContext, useState } from "react";
import { Context } from "../../context/CreateContext";
import Button from "../Button";
import GameOfThronesImage from "../../assets/GameOfThrones.png";
import ClashOfKingsImage from "../../assets/ClashOfKings.png";
import StormOfSwordsImage from "../../assets/StormOfSwords.png";
import HedgeKnightImage from "../../assets/HedgeKnight.png";
import FeastForCrowsImage from "../../assets/FeastForCrows.png";
import SwornSwordImage from "../../assets/SwornSword.png";
import MysteryKnightImage from "../../assets/MysteryKnight.png";
import DanceWithDragonsImage from "../../assets/DanceWithDragons.png";

export default function SearchResult() {
    const { books2, addItemToCart  } = useContext(Context);


    const bookImages = {
      "A Game of Thrones": GameOfThronesImage,
      "A Clash of Kings": ClashOfKingsImage,
      "A Storm Of Swords": StormOfSwordsImage,
      "The Hedge Knight": HedgeKnightImage,
      "A Feast For Crows": FeastForCrowsImage,
      "The Sworn Sword": SwornSwordImage,
      "The Mystery Knight": MysteryKnightImage,
      "A Dance with Dragons": DanceWithDragonsImage,
    };

   /*  const handleAddItem = (book) => {
        setShoppingCart([...shoppingCart, book]);
    }; */

    console.log(books2);

    return (
        <>
            <ul>
                {books2.map((book) => (
                    <li key={book.url}>
                        <div className="image-container">
                            <img
                                src={bookImages[book.name]}
                                alt={`${book.name} Cover`}
                                className="book-image"
                            />
                            <h4 style={{padding: "5px", color: "#70300E"}}>{book.name}</h4>
                            <h4 style={{color: "#70300E"}}>George R.R. Martin</h4>


                            <h4 style={{padding: "5px" , color: "#70300E"}}>$9,24</h4> 
                            <Button
                            buttonText="Book Info"
                            //className="backBTN"
                            onClick={() => navigate(-1)}
                            ></Button>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
}
