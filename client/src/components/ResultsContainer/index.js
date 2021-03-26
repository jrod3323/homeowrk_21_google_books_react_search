import React from "react";
import "./style.css"

function ResultsContainer() {
    return (
        <div style={{display:"flex",justifyContent:"center"}}>
        <div className="container " style={{margin:"10px" , border:"solid", borderColor:"grey", justifyContent:"center"}}>
            <h1>Results</h1>
            <div className="card py-3" style={{ justifyContent:"center", textAlign:"center"}}>
                <div >
                    <img className="card-img-top" src="http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api" alt="Card image cap" style={{width:"40px", height:"40px", textAlign:"center"}}/>
                </div>
                <div className="card-body">
                    <h5 className="card-title">The Hunger Games</h5>
                    <h5>Author: Suzanne Collins</h5>
                    <p className="card-text">"Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature."</p>
                    <a href="http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api" target="_blank" rel="noreferrer" className="btn btn-primary">Go To Book</a>
                    <button type="button" className="btn btn-primary" style={{margin:"3px"}}>
                        Save Book
                    </button>
                </div>
            </div>
        </div>
       </div>
    )
}

export default ResultsContainer