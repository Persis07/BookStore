/*import { useContext } from "react";
import { Context } from "../../context/CreateContext";
import { handleInput } from "../../custom/Handle";

export default function Search() {
    const {books, setBooks} = useContext(Context);
    return (
        <>
            <ul>
                <li>
                    <form onSubmit={e => handleInput(e, books, setBooks)}>
                        <input type="text" name="search"/>
                        <button type="submit">
                            <span className="material-symbols-outlined">search</span>
                        </button>
                    </form>
                </li>
            </ul>
        </>
    );
}; */

import React, { useContext, useState } from 'react';
import { Context } from '../../context/CreateContext';


function BookSearch() {
  //const [books2, setBooks2] = useState([]);
  const {books2, setBooks2} = useContext(Context);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://anapioficeandfire.com/api/books?name=${searchQuery}`
      );

      if (!response.ok) {
        throw new Error('No network response.');
      }

      const data = await response.json();
      setBooks2(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1 className='store-name'>PGNJ The Book Store</h1>
      
      <input className='input-field'
        type="text"
        placeholder="Search for your a book..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      {/* <ul>
        {books2.map((book) => (
          <li key={book.url}>{book.name}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default BookSearch;
