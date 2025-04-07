import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import PlayList from './components/PlayList/PlayList';
import Search from './components/Search/Search';
import SearchResults from './components/SearchResults/SearchResults';
import Spotify from './utils/Spotify'

function App() {
  const [searchResult, setSearchResult] = useState([]);
  const [playListItems, setPayListItems] = useState([]);
  const [playListName, setPlayListName] = useState('');
  const [playLists, setPlayLists] = useState([]);

  useEffect(() => {
    Spotify.getAccessToken();
  },[]);

  useEffect(() => {
    const fetchPlaylists = async () => {
      const playlists = await Spotify.getPlaylists();
      setPlayLists(playlists || []);
    };
    fetchPlaylists();
  }, []);

  const search = async (term) => {
    const results = await Spotify.searchSpotify(term);
    setSearchResult(results);
  }

  const addTrack = (track) => {
    if (!playListItems.find(item => item.id === track.id)) {
      setPayListItems((prev) => [...prev, track]);
    } else {
      alert("Can't add track to playlist");
    }
  }

  const removeTrack = (track) => {
    setPayListItems((prev) => prev.filter(item => item.id !== track.id));      
  }

  const savePlayList = async () => {
    const uriList = playListItems.map(item => item.uri);
    const results = await Spotify.addToPlayList(playListName, uriList);
    if (results) {
      alert("Playlist saved");
      setPayListItems([]);
      setPlayListName('');
    } else {
      alert("Failed to save the playlist");
    }
  }
  
  return (
    <>
      <div className={`${styles.row} ${styles.main} ${styles.directionColumn} ${styles.contentAligmmentCenter}`}>
        <h1>Jamming project</h1>
        <Search onSearch={search} />
      </div>
      <div className={`${styles.row} ${styles.main} ${styles.directionRow}`}>
        <SearchResults
          className={styles.column}
          searchResults={searchResult}
          addTrack={addTrack}
        />
        <PlayList
          className={styles.column}
          playListItems={playListItems}
          playListName={playListName}
          setPlayListName={setPlayListName}
          removeTrack={removeTrack}
          savePlayList={savePlayList}
          playLists={playLists}
        />
      </div>
    </>
  );
}

export default App;