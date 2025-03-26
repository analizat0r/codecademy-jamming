import React, { useState } from "react";
import TrackList from "../TrackList/TrackList";
import styles from "./PlayList.module.css";


export default function PlayList() {
    const [playListName, setPlayListName] = useState('');
    
    function handleChange(event) {
        setPlayListName(event.target.value);
    };

    function handleSubmit(event){
        event.preventDefault();
    };

    return (
        <div className={styles.main}>
            <h2>Create a Playlist</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="playlistName" id="playlistName" value={playListName} onChange={handleChange}></input>
                <TrackList /> 
                <button type="submit">Save Playlist</button>
            </form>
            
        </div>
    );
};

//man atrodo sitas bus blogai, reikia painvestiguoti kaip submitinti cia esancius 'values', kad issaugoti playlist