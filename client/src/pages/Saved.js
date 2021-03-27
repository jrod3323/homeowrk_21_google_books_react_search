import React, {useState, useEffect} from "react";
import SaveContainer from "../components/SaveContainer";
import SaveJumbo from "../components/SaveJumbo";
import API from "../utils/API";

function SavePage() {

  const [books,setBooks]=useState([])

  useEffect(()=>{
    loadBooks()
  },[])

  //loads saved
  function loadBooks() {
    API.getBooks()
      .then(res => 
        setBooks(res.data)
      )
      .catch(error => console.log(error))
  }

  //delete a book
  function deleteBook (id){
    API.deleteBook(id)
      .then(res=> loadBooks())
      .catch(error => console.log(error))
  }

  return (
    <div>
      <SaveJumbo />
      <SaveContainer 
      deleteBook={deleteBook} 
      books={books}
      />
    </div>
  );
}

export default SavePage;