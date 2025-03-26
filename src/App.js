import React, { useState } from 'react';
import styles from './App.module.css';
import PlayList from './components/PlayList/PlayList';
import Search from './components/Search/Search';
import SearchResults from './components/SearchResults/SearchResults';
import Spotify from './utils/Spotify'

function App() {
  const [searchResult, setSearchResult] = useState([]);

  const search = async (term) => {
    const results = await Spotify.searchSpotify(term);
    setSearchResult(results);
  }
  
  return (
    <>
      <div className={`${styles.row} ${styles.main} ${styles.directionColumn} ${styles.contentAligmmentCenter}`}>
        <h1>Jamming project</h1>
        <Search onSearch={search} />
      </div>
      <div className={`${styles.row} ${styles.main} ${styles.directionRow}`}>
        <SearchResults className={styles.column} searchResults={searchResult}/>
        <PlayList className={styles.column} />
      </div>
    </>
  );
}

export default App;
