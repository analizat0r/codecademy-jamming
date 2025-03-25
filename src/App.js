import React, { useState } from 'react';
import './App.css';
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
      <h1>Jamming project</h1>
      <Search onSearch={search} />
      <SearchResults searchResults={searchResult}/>
      <PlayList />
    </>
  );
}

export default App;
