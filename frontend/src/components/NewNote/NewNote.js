import React, { useState } from "react";

function NewNote (props) {

    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');

    const changeTitleHandler = event =>{
        const value = event.target.value;
        setTitle(value);
    }

    const changeDescHandler = event =>{
        const value = event.target.value;
        setDesc(value);
    }

    const addNote = () => {
        const note = {
            title: title,
            body: desc,
        };
        props.onAdd(note);
    }

    return ( 
        <div className="note">
            <label>Tytuł:</label>
            <input 
                type='text'
                onChange={changeTitleHandler} />
            <label>Opis:</label>
            <input 
                type="text"
                onChange={changeDescHandler} />

            <button onClick={()=> addNote() }>Dodaj notatkę</button>
        </div>
     );
}

export default NewNote ;