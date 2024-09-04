import React from "react";
import "./Home.css";
import Cards from "../../components/Cards/Cards.js"
import security from"../../components/Cards/security.png"
import loved from "../../components/Cards/loved.png"
import ui from"../../components/Cards/ui.png"
let Home =()=>{
    return(
        <>
            <div className="heading heading_color">Notes App📚</div>
            <p className="sub_heading sub_heading">Your Notes Taking App</p>

            <div className="cards_holder">

                <Cards image={security} desc={'App Is Secured'}/>

                <Cards image={loved} desc={'Loved By 100k+ User'}/>

                <Cards image={ui} desc={'Simple User Interface'}/>
            </div>

            <div className="btn-holder">
                <button className="btn btn-yellow">✒ Add Task</button>
                <button className="btn btn-gray">📃 Show Task </button>
            </div>
        </>
    )
}

export default Home;