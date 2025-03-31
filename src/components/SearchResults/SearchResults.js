import React from "react";
import TrackList from "../TrackList/TrackList";
import styles from "./SearchResults.module.css";

export default function SearchResults({ searchResults, addTrack }) {
    return (
        <div className={styles.main}>
            <h1>RESULTS</h1>
            <TrackList tracks={searchResults} addTrack={addTrack} isInPlaylist={true} /> 
        </div>
    );
};