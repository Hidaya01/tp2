import React from "react";
import './livre.css';
class Livre extends React.Component{
   
    render(){
         const { title,price,image }= this.props;
        return(   
                <div className="card">
                      <div className="card-img">
                        <img src={image} alt="" />
                    </div>
                    <h3>{title} </h3>
                    <p> Price: {price}</p>
                    <button>Read More</button>
                </div>
            
        );
    }
    
}

export default Livre;