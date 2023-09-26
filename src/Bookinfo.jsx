//. Julian

import React, { useState } from 'react';

function Bookshop() {
  const [bookDetails, setBookDetails] = useState({
    title: '',
    author: '',
    description: '',
  });

  const showBookDetails = (title, author, description) => {
    setBookDetails({
      title,
      author,
      description,
    });
  };

  return (
    <div className="bookshop">
      <div className="book">
        <img src="book1.jpg" alt="Book 1" onClick={() => showBookDetails('Book 1', 'Author 1', 'Description of Book 1')} />
      </div>
      <div className="book">
        <img src="book2.jpg" alt="Book 2" onClick={() => showBookDetails('Book 2', 'Author 2', 'Description of Book 2')} />
      </div>
      {/* Add more book entries here 2/10 */}
      <div id="book-details" className="hidden">
        <h2 id="book-title">{bookDetails.title}</h2>
        <p id="book-author">{bookDetails.author}</p>
        <p id="book-description">{bookDetails.description}</p>
      </div>
      {/* Include your script.js logic here if needed */}
    </div>
  );
}

export default Bookshop;
