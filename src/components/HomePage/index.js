import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBook, FaSearch } from 'react-icons/fa';
import './index.css';

// Sample book data from JSON
const bookData = {
  "books": [
    {
      "id": 1,
      "title": "The Great Gatsby",
      "author": "F. Scott Fitzgerald",
      "genre": "Classic",
      "rating": 4.7,
      "description": "A novel set in the Jazz Age that explores themes of wealth, love, and the American Dream.",
      "publication_year": 1925
    },
    {
      "id": 2,
      "title": "To Kill a Mockingbird",
      "author": "Harper Lee",
      "genre": "Fiction",
      "rating": 4.8,
      "description": "A timeless novel of a child's moral awakening and a poignant tale of race and justice in the American South.",
      "publication_year": 1960
    },
    {
      "id": 3,
      "title": "1984",
      "author": "George Orwell",
      "genre": "Dystopian",
      "rating": 4.6,
      "description": "A dystopian social science fiction novel and cautionary tale about the dangers of totalitarianism.",
      "publication_year": 1949
    },
    {
      "id": 4,
      "title": "Pride and Prejudice",
      "author": "Jane Austen",
      "genre": "Romance",
      "rating": 4.9,
      "description": "A romantic novel that also serves as a social commentary on the British landed gentry of the early 19th century.",
      "publication_year": 1813
    },
    {
      "id": 5,
      "title": "The Catcher in the Rye",
      "author": "J.D. Salinger",
      "genre": "Fiction",
      "rating": 4.3,
      "description": "A story about a young boy’s journey through the challenges of adolescence.",
      "publication_year": 1951
    }
  ]
};

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBooks = bookData.books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-page">
      <h1><FaBook /> Book Library</h1>
      <div className="search-container">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search by title or author..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
      </div>
      <div className="book-list">
        {filteredBooks.map(book => (
          <Link to={`/book/${book.id}`} key={book.id} className="book-link">
            <div className="book-card">
              <h2>{book.title}</h2>
              <p>by {book.author}</p>
              <p><strong>Genre:</strong> {book.genre}</p>
              <p><strong>Rating:</strong> {book.rating}</p>
              <p><strong>Year:</strong> {book.publication_year}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
