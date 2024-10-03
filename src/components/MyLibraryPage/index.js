import React from 'react';
import './index.css';

const MyLibraryPage = ({ library, onRemoveBook }) => {
  return (
    <div className="my-library">
      <h1>My Library</h1>
      {library.length === 0 ? (
        <p>No books in your library.</p>
      ) : (
        <div className="library-list">
          {library.map((book) => (
            <div key={book.id} className="library-card">
              <h3>{book.title}</h3>
              <button onClick={() => onRemoveBook(book.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyLibraryPage;
