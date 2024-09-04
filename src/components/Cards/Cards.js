import React from "react";
import './Cards.css'
const Cards = ({image,desc})=>{
    return(
        <>  
            <div className="card_feature">
            <img src={image} alt="Secured" className="card_img"/>
            <p className="card_desc">{desc}</p>
            </div>
        </>
    )
}
export default Cards;