import React,{useState} from "react";



function BooklistState({books}){
    return(
        <div style={{display:"flex",gap:"60" , alignItems:"center", justifyContent:"center"}}>
                {books.map((book,index)=>(
                        <div className="card" key={index}>
                        <div className="card-img">
                            <img src={book.image} alt="" />
                        </div>
                        <h3>{book.title} </h3>
                        <p> Price: {book.price}</p>
                        <button>Read More</button>
                    </div>   
                ))
                }
            </div>
    )
}

export default BooklistState;