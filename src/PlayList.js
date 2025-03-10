import React, { useState } from "react";
import TrackList from "./TrackList";

export default function PlayList() {
    const [playListName, setPlayListName] = useState('');
    
    function handleChange(event) {
        setPlayListName(event.target.value);
    };

    function handleSubmit(event){
        event.preventDefault();
    };

    return (
        <div>
            <h2>Create a Playlist</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="playlistName" id="playlistName" value={playListName} onChange={handleChange}></input>
                <TrackList /> 
                <button type="submit"></button>
            </form>
            
        </div>
    );
};

//man atrodo sitas bus blogai, reikia painvestiguoti kaip submitinti cia esancius 'values', kad issaugoti playlist