import React from "react";
import "./Home.css";
import Cards from "../../components/Cards/Cards.js"
import security from "../../components/Cards/security.png"
import loved from "../../components/Cards/loved.png"
import ui from "../../components/Cards/ui.png"
import { Link } from "react-router-dom";
let Home = () => {
    return (
        <>
            <div className="main">

                <div className="heading heading_color">Notes App📚</div>
                <p className="sub_heading ">Your Notes Taking App. Never Miss Any Important Things.</p>

                <div className="cards_holder">

                    <Cards image={security} desc={'App Is Secured'} />

                    <Cards image={loved} desc={'Loved By 100k+ User'} />

                    <Cards image={ui} desc={'Simple User Interface'} />
                </div>

                <div className="btn-holder">
                    <Link to="/add">
                        <button className="btn btn-yellow">✒ Add Note</button>
                    </Link>

                    <Link to="/show">
                    <button className="btn btn-gray">📃 Show Notes </button>
                    </Link>

                   
                </div>

            </div>
        </>
    )
}

export default Home;