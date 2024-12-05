import React from "react";
import Livre from "./livre";

const books = [
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


    ];
    
class ListLivre extends React.Component{
    render(){
        return(
            <div style={{display:"flex",gap:"40" , alignItems:"center", justifyContent:"center"}}>
                {books.map((book,index)=>(
                    <Livre
                    key={index}
                    title={book.title}
                    price={book.price}  
                    image={book.image}  />         
                ))
                }
            </div>)
    };
};

export default ListLivre;