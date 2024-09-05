import React, { useState } from "react";
import './Add.css';
import HomeIcon from "../../components/HomeIcon/HomeIcon";
import EmojiPicker from 'emoji-picker-react';
import { json } from "react-router-dom";
import toast from "react-hot-toast";

const Add = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [category, setCategory] = useState("");
    const [emoji, setEmoji] = useState("");
    const [opendilog, setDilog] = useState("false");

    const addNote = () => {
        const notes = JSON.parse(localStorage.getItem("notes")) || [];

        const noteobj = {
            title,
            description,
            category,
            emoji
        };

        notes.push(noteobj);

        localStorage.setItem("notes", JSON.stringify(notes));

        toast.success("Note Added Successfully!");

        setTitle("");
        setDescription("");
        setCategory("");
        setEmoji("");
    }

    return (
        <>
            <div className="main">
                <p className="heading heading_color">Add Notes ✒</p>
                <form>
                    <input
                        type="text"
                        placeholder="Add Title Here..."
                        value={title}
                        className="input_field"
                        onChange={(e) => {
                            setTitle(e.target.value);
                        }}
                    />

                    <input
                        type="text"
                        placeholder="Descriptions"
                        value={description}
                        className="input_field"
                        onChange={(e) => {
                            setDescription(e.target.value);
                        }}
                    />

                    <EmojiPicker open={opendilog} width={"670px"} height={"400px"}
                        skinTonesDisabled
                        onEmojiClick={(emojiobj) => {
                            setEmoji(emojiobj.emoji)
                            setDilog(false)
                        }} />

                    <div className="emoji-container" onClick={(emoji) => setDilog(true)}>
                        {emoji ? emoji : "Select Emoji"}
                    </div>

                    <select className="input_field" onChange={(e)=>{setCategory(e.target.value)}}>
                        <option>Select</option>
                        <option value="shopping">Shopping</option>
                        <option value="work">Work</option>
                        <option value="task">Task</option>
                        <option value="personal">Personal</option>
                    </select>

                    <button type="button" className="btn " onClick={addNote}>
                        + Add Note
                    </button>

                </form>

                <HomeIcon />
            </div>
        </>
    )
}

export default Add;