import React from "react";
import TrackList from "../TrackList/TrackList";
import styles from "./SearchResults.module.css";

export default function SearchResults({ searchResults, addTrack }) {
    return (
        <div className={styles.main}>
            <h2 className={styles.heading}>RESULTS</h2>
            <TrackList tracks={searchResults} addTrack={addTrack} isInPlaylist={false} /> 
        </div>
    );
};