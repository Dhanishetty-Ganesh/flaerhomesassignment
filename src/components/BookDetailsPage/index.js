import React from 'react';
import './index.css';

const BookDetailsPage = ({ book, onAddToLibrary }) => {
  if (!book) return <p>No book selected</p>;

  return (
    <div className="book-details">
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
      <p>Year: {book.year}</p>
      <p>{book.description}</p>
      <button onClick={() => onAddToLibrary(book)}>Add to My Library</button>
    </div>
  );
};

export default BookDetailsPage;
