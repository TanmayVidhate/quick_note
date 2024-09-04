import React from "react";
import Homeimg from "../../assets/house.png"
import { Link } from "react-router-dom";
import './HomeIcon.css';
const HomeIcon = () => {
    return (
        <>  
            <Link to="/">
                <img src={Homeimg} alt="home image" className="homeimg"/>
            </Link>
        </>
    )
}

export default HomeIcon;