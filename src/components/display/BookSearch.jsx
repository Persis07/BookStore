/*import React, { useState } from 'react';


function BookSearch() {
  const [books, setBooks] = useState([]);
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
      setBooks(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>PGNJ The Book Store</h1>
      <h2>Search for a Book</h2>
      <input
        type="text"
        placeholder="Search for your Game of thrones book..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {books.map((book) => (
          <li key={book.url}>{book.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default BookSearch;*/
