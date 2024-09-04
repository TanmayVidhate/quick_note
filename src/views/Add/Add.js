import React, { useState } from "react";
import './Add.css';
import HomeIcon from "../../components/HomeIcon/HomeIcon";
const Add = () => {

    const [title, setTitle] = useState("");
    return (
        <>
            <div className="main">
                <p className="heading heading_color">Add Notes ✒</p>

                <input
                    type="text"
                    placeholder="Add Text Here..."
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }}
                />

                <button type="button" onClick={()=>{
                    setTitle("")
                }}>
                    Clear
                </button>



                <HomeIcon />
            </div>
        </>
    )
}

export default Add;