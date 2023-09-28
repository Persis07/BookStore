// Container.jsx
import React, { useState } from "react";
import { useFetch } from "../custom/Fetch";
import { Context } from "./CreateContext";

export default function Container({ children }) {
  const { books, setBooks } = useFetch();
  const [books2, setBooks2] = useState("");
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  return (
    <Context.Provider
      value={{
        books,
        setBooks,
        books2,
        setBooks2,
        cartItems,
        setCartItems,
        addItemToCart,
      }}
    >
      {children}
    </Context.Provider>
  );
}
