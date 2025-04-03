import React, { useState } from "react";
import TrackList from "../TrackList/TrackList";
import styles from "./PlayList.module.css";
import Spotify from "../../utils/Spotify"


export default function PlayList({ playListItems, removeTrack, savePlayList }) {
    const [playListName, setPlayListName] = useState('');
    
    function handleChange(event) {
        setPlayListName(event.target.value);
    };

    async function handleSubmit(event){
        event.preventDefault();
        savePlayList();
    };

    return (
        <div className={styles.main}>
            <h2>CREATE A PLAYLIST</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="playlistName" id="playlistName" value={playListName} onChange={handleChange}></input>
                <button type="submit">Save Playlist</button>
            </form>
            <TrackList tracks={playListItems} isInPlaylist={true} removeTrack={removeTrack} /> 
        </div>
    );
};