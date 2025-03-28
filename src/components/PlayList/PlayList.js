import React, { useState } from "react";
import TrackList from "../TrackList/TrackList";
import styles from "./PlayList.module.css";


export default function PlayList({ playListItems }) {
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
                <button type="submit">Save Playlist</button>
            </form>
            <TrackList tracks={playListItems}/> 
        </div>
    );
};