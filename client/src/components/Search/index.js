import React, {useRef} from "react";
import "./style.css"

function Search(props) {

    const searchRef = useRef();

    return (
        
            <div className="input-group container" style={{justifyContent:"center"}} >
                <div className="form-outline" style={{width: "80%", textAlign:"center", padding:"10px", border:"solid", borderColor:"grey"}}>
                    <input ref={searchRef}type="search" id="form1" className="form-control" placeholder="Search for Books"/>
                    <button 
                    type="button" 
                    className="btn btn-primary" 
                    style={{margin:"3px", width:"30%"}}
                    onClick={()=>{
                        props.search(searchRef.current.value)
                    }}
                    >
                        Search
                    </button>
                </div>
                
            </div>
       
    )
}

export default Search