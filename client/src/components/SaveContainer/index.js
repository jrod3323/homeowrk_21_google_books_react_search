import React from "react";
import "./style.css"

function SaveContainer(props) {
    return (

        <div style={{display:"flex",justifyContent:"center"}}>
        <div className="container " style={{margin:"10px" , border:"solid", borderColor:"grey", justifyContent:"center"}}>
            <h1>Saved Books</h1>

        {props.books.map(book =>(
            <div className="card " style={{ justifyContent:"center", textAlign:"center"}}>
            <div >
                <img className="card-img-top" src={book.image} alt={book.title} style={{width:"40px", height:"40px", textAlign:"center"}}/>
            </div>
            <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <h5>Author: {book.author}</h5>
                <p className="card-text">{book.synopsis}</p>
                <a href="http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api" target="_blank" rel="noreferrer" className="btn btn-primary">Go To Book</a>
                <button 
                type="button" 
                className="btn btn-primary" 
                style={{margin:"3px"}}
                onClick = {()=>props.deleteBook(book._id)}
                >
                    Delete Book
                </button>
            </div>
        </div>
        ))}

        </div>
       </div>
    )
}

export default SaveContainer