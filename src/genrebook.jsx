import React, { useState } from 'react';
import "./genrebook.css";

// Données initiales
const booksData = [
  { "title": "1984", "author": "George Orwell", "publicationYear": 1949, "genre": "Dystopian", "rating": 4.8 },
  { "title": "To Kill a Mockingbird", "author": "Harper Lee", "publicationYear": 1960, "genre": "Classic", "rating": 4.9 },
  { "title": "The Great Gatsby", "author": "F. Scott Fitzgerald", "publicationYear": 1925, "genre": "Classic", "rating": 4.4 },
  { "title": "Pride and Prejudice", "author": "Jane Austen", "publicationYear": 1813, "genre": "Romance", "rating": 4.7 },
  { "title": "Moby-Dick", "author": "Herman Melville", "publicationYear": 1851, "genre": "Adventure", "rating": 4.1 },
  { "title": "War and Peace", "author": "Leo Tolstoy", "publicationYear": 1869, "genre": "Historical Fiction", "rating": 4.5 },
  { "title": "The Alchemist", "author": "Paulo Coelho", "publicationYear": 1988, "genre": "Philosophical Fiction", "rating": 4.7 }
];

const BookList = () => {
  const [books, setBooks] = useState(booksData);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');  // 'asc' or 'desc'
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 5;

  // Filtrer les livres par genre
  const filterByGenre = (genre) => {
    setSelectedGenre(genre);
    if (genre === '') {
      setBooks(booksData);
    } else {
      setBooks(booksData.filter(book => book.genre === genre));
    }
  };

  // Trier les livres par année ou par note
  const sortBooks = (criteria) => {
    const sortedBooks = [...books];
    sortedBooks.sort((a, b) => {
      if (criteria === 'year') {
        return sortOrder === 'asc' ? a.publicationYear - b.publicationYear : b.publicationYear - a.publicationYear;
      } else if (criteria === 'rating') {
        return sortOrder === 'asc' ? a.rating - b.rating : b.rating - a.rating;
      }
      return 0;
    });
    setBooks(sortedBooks);
  };

  // Filtrer les livres par titre
  const filterByTitle = (query) => {
    setSearchQuery(query);
    setBooks(booksData.filter(book => book.title.toLowerCase().includes(query.toLowerCase())));
  };

  // Pagination
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calculer les livres affichés sur la page actuelle
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  return (
    <div>
      <h1>Book List</h1>

      {/* Filtre par genre */}
      <select onChange={(e) => filterByGenre(e.target.value)}>
        <option value="">All Genres</option>
        <option value="Dystopian">Dystopian</option>
        <option value="Classic">Classic</option>
        <option value="Romance">Romance</option>
        <option value="Adventure">Adventure</option>
        <option value="Historical Fiction">Historical Fiction</option>
        <option value="Philosophical Fiction">Philosophical Fiction</option>
      </select>

      {/* Recherche par titre */}
      <input
        type="text"
        placeholder="Search by title"
        value={searchQuery}
        onChange={(e) => filterByTitle(e.target.value)}
      />

      {/* Tri */}
      <button id='byyear' onClick={() => { sortBooks('year'); setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc'); }}>
        Sort by Year ({sortOrder})
      </button>
      <button id='byrating' onClick={() => { sortBooks('rating'); setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc'); }}>
        Sort by Rating ({sortOrder})
      </button>

      {/* Affichage des livres sous forme de cards */}
      <div className="book-cards">
        {currentBooks.map((book, index) => (
          <div key={index} className="card">
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <p>{book.publicationYear}</p>
            <p>{book.genre}</p>
            <p>Rating: {book.rating}</p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className='pagediv'>
        {Array.from({ length: Math.ceil(books.length / booksPerPage) }, (_, index) => (
          <button className='page' key={index + 1} onClick={() => paginate(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default BookList;
