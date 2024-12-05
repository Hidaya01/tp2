import './App.css';
// import Resulttable from './tablelivres';
// import ListLivre from './components/bookList';
// import Header from './components/header';
import BooklistState from './booklistState';
import BookList from './genrebook';

const Books = [
    {"title": "1984",
    "author": "George Orwell",
    "publicationYear":1949,
    "genre": "Dystopian",
    "rating": 4.8,
    "price": 60.50,
    "image":"1984.jpg"},

    {"title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "publicationYear": 1960,
    "genre": "Classic",
    "rating": 4.9,
    "price": 90.20,
    "image":"to_kill_a_mockingbird_cover-t34.jpg"},

    {"title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "publicationYear": 1925,
    "genre": "Classic",
    "rating": 4.4,
    "price": 100.00,
    "image":"The_Great_Gatsby_Cover_1925_Retouched.jpg"},
    
    {"title": "Pride and Prejudice",
    "author": "Jane Austen",
    "publicationYear":1813,
    "genre": "Romance",
    "rating": 4.7,
    "price": 100.00,
    "image":"pride-prejudice-book-cover.jpg"},

    {"title": "Moby-Dick",
    "author": "Herman Melville",
    "publicationYear":1851,
    "genre": "Adventure",
    "rating": 4.1,
    "price": 100.00,
    "image":"images.jpeg"},
    {"title": "War and Peace","author": "Leo Tolstoy","publicationYear":1869,"genre": "Historical Fiction","rating": 4.5,"price": 100.00,
    "image":"war&peace.jpg"

    },
    

    ];

function App(){
    return(
        <>
            {/* <Header/>
            <ListLivre/> */}
            <BookList/>
        </>
    )
}
export default App;