import React from "react";
import './NotesCard.css';
import deleteImg from './recycle-bin.png';



function NoteCategory({ category }) {
    const CATEGORY_EMOJIS = {
        "shopping": "🛒",
        "work": "👜",
        "personal": "🧑",
        "learing": "📔",
        "health": "🏋️‍♂️"
    }
    return (
        <div className={`note-card-category bg-${category}`}>
            <span className="note-category-emoji">{CATEGORY_EMOJIS[category]}</span>
            {category}
        </div>
    )
}

function deleteNote(index)
{
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || [] ;
    savedNotes.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(savedNotes));
    window.location.reload();
}

function NotesCard({index,title,emoji,category,description}) {
    
    return (
        <div className="note-card">
            <div className="note-card-emoji">{emoji}</div>
            <div className="note-card-title">
                {title}
                <p className="note-card-description">{description}</p>
                <NoteCategory category={category} />

                <img src={deleteImg}

                    alt="delete Icon"
                    className="note-card-delete-icon" 
                    onClick={() => {
                        deleteNote(index);
                    }
                } 
                />
            </div>
        </div>

    )
}

export default NotesCard;