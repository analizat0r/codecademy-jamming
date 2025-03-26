import React from "react";
import TrackList from "../TrackList/TrackList";
import styles from "./SearchResults.module.css";

export default function SearchResults( {searchResults = []} ) {
    return (
        <div className={styles.main}>
            <h1>Results</h1>
            <TrackList searchResults={searchResults}/> 
        </div>
    );
};

// need to pass ADD TO Playlist button somehow to this component