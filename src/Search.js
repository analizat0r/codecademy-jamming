import React, { useState, useEffect } from "react";
import Spotify from "./utils/Spotify";

export default function Search() {
    const [searchValue, setSearchValue] = useState("");

    const handleChange = (event) => {
        setSearchValue(event.target.value);
    };

    function handleSubmit(event){
        event.preventDefault();
        const formatedInput = searchValue.trim().split(" ").join("+");
        Spotify.searchSpotify(formatedInput);
    };

    return (
        <form onSubmit={handleSubmit}> 
            <label htmlFor="searchBar">Search</label>
            <input type="text" id="searchBar" name="searchBar" value={searchValue} onChange={handleChange} placeholder="Search songs"></input>
            <button type="submit">Search</button>
        </form>
    );
};