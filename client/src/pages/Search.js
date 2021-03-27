import React, {useState, useEffect} from "react";
import SearchJumbo from "../components/SearchJumbo";
import Search from "../components/Search"
import ResultsContainer from "../components/ResultsContainer";
import API from "../utils/API"

function SearchPage() {

  const [search,setSearch]=useState([])

  //loads saved
  function searchBooks(query) {
    API.apiBooks(query)
      .then(res => {
        if(res.data.items){
          setSearch(res.data.items);
          console.log(res.data.items)
        }
      }
      )
      .catch(error => console.log(error))
  }

  function saveBooks(data){
    API.saveBook(data)
  }

  return (
    <div>
      <SearchJumbo />
      <Search search={searchBooks}/>
      <ResultsContainer results={search} saveBooks={saveBooks}/>
    </div>
  );
}

export default SearchPage;