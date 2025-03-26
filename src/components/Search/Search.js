import React, { useState, useEffect } from "react";
import styles from "./Search.module.css";

export default function Search({ onSearch }) {
    const [searchValue, setSearchValue] = useState("");

    const handleChange = (event) => {
        setSearchValue(event.target.value);
    };

    function handleSubmit(event){
        event.preventDefault();
        const formatedInput = searchValue.trim().split(" ").join("+");
        onSearch(formatedInput);
    };

    return (
        <form className={styles.main} onSubmit={handleSubmit}> 
            <input type="text" id="searchBar" name="searchBar" value={searchValue} onChange={handleChange} placeholder="Search songs"></input>
            <button type="submit">Search</button>
        </form>
    );
};