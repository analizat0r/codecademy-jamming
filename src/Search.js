import React, { useState } from "react";

export default function Search() {
    const [searchValue, setSearchValue] = useState("");

    function handleChange(event) {
        setSearchValue(event.target.value);
    };

    function handleSubmit(event){
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSubmit}> 
            <label htmlFor="searchBar">Search</label>
            <input type="text" id="searchBar" name="searchBar" value={searchValue} onChange={handleChange} placeholder="Search songs"></input>
            <button type="submit">Search</button>
        </form>
    );
};