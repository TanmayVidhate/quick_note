import React, { useEffect, useState } from "react";
import './Show.css';
import HomeIcon from "../../components/HomeIcon/HomeIcon";
import NotesCard from "../../components/NoteCard/NoteCard";
import { THEME } from "../../Config/data"

const Show = () => {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
        setNotes(savedNotes);
    }, []);

    return (

        <>
            <div className="main" style={{background:THEME.main}}>

                <p className="heading heading_color" style={{color:THEME.headline}}>Show Notes 📃</p>
                <div className="note-conatiner">
   
                {
                   notes.map((note,index)=><NotesCard 
                   index={index} 
                   title={note.title} 
                   description={note.description} 
                   category={note.category} 
                   emoji={note.emoji} />
                   )
                   
                }
                </div>
                <HomeIcon />
            </div>
        </>
    )
}
export default Show;