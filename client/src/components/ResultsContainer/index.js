import React, {useState, useEffect} from "react";
import "./style.css";
import API from "../../utils/API"

function ResultsContainer(props) {

    return (
        <div style={{display:"flex",justifyContent:"center"}}>
        <div className="container " style={{margin:"10px" , border:"solid", borderColor:"grey", justifyContent:"center"}}>
            <h1>Results</h1>

            {
                props.results.length ? ( props.results.map(item=>(
                <div className="card py-3" style={{ justifyContent:"center", textAlign:"center"}}>
                    <div >
                        <img className="card-img-top" src={item.volumeInfo.imageLinks.thumbnail} alt={item.volumeInfo.title} style={{width:"40px", height:"40px", textAlign:"center"}}/>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{item.volumeInfo.title}</h5>
                        <h5>Author: {item.volumeInfo.authors}</h5>
                        <p className="card-text">{item.volumeInfo.description}</p>
                        <a href={item.volumeInfo.canonicalVolumeLink} target="_blank" rel="noreferrer" className="btn btn-primary">Go To Book</a>
                        <button type="button" className="btn btn-primary" style={{margin:"3px"}}>
                            Save Book
                        </button>
                    </div>
                </div>
            ))) : (
                <div className="card py-3" style={{ justifyContent:"center", textAlign:"center"}}>
                    <h1>Perform A Search</h1>
                </div>
            )
            }

            
            
        </div>
       </div>
    )
}

export default ResultsContainer