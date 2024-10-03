import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import BookDetailsPage from './components/BookDetailsPage';
import MyLibraryPage from './components/MyLibraryPage';
import "./App.css"

const App = () => {
  const [books] = useState([
    { id: 1, title: 'Book 1', author: 'Author 1', genre: 'Fiction', year: '2020', description: 'Description of book 1' },
    { id: 2, title: 'Book 2', author: 'Author 2', genre: 'Non-Fiction', year: '2019', description: 'Description of book 2' },
    // Add more books
  ]);

  const [selectedBook, setSelectedBook] = useState(null);
  const [library, setLibrary] = useState([]);

  const handleSelectBook = (book) => {
    setSelectedBook(book);
  };

  const handleAddToLibrary = (book) => {
    if (!library.some((b) => b.id === book.id)) {
      setLibrary([...library, book]);
    }
  };

  const handleRemoveBook = (id) => {
    setLibrary(library.filter((book) => book.id !== id));
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<HomePage books={books} onSelectBook={handleSelectBook} />}
        />
        <Route
          path="/book-details"
          element={<BookDetailsPage book={selectedBook} onAddToLibrary={handleAddToLibrary} />}
        />
        <Route
          path="/my-library"
          element={<MyLibraryPage library={library} onRemoveBook={handleRemoveBook} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
