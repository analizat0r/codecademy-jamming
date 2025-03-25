import React from "react";
import TrackList from "../TrackList/TrackList";

export default function SearchResults( {searchResults = []} ) {
    return (
        <>
            <h1>Results</h1>
            <TrackList searchResults={searchResults}/> 
        </>
    );
};

// need to pass ADD TO Playlist button somehow to this component