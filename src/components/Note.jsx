import React from "react";

function Note(props) {
    return (
        <div className="border lined-thick">
            <p className="note-title">{props.title}</p>
            <p>{props.content}</p>
        </div>
    );
}

export default Note;