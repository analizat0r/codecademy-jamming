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
  const [pListID, setPListID] = useState('');
  const [opendPLitems, setOpenedPLitems] = useState([]);

  useEffect(() => {
    const initializeSpotify = async () => {
      const token = Spotify.getAccessToken();
      if (token) {
        await Spotify.getUserID();
        setPlayLists(await Spotify.getPlaylists() || []); 
      }
    };
    initializeSpotify();
  }, []);

  const search = async (term) => {
    const results = await Spotify.searchSpotify(term);
    setSearchResult(results);
  };

  const addTrack = (track) => {
    if (!playListItems.find(item => item.id === track.id)) {
      setPayListItems((prev) => [...prev, track]);
    } else {
      alert("Can't add track to playlist");
    }
  };

  const removeTrack = (track) => {
    setPayListItems((prev) => prev.filter(item => item.id !== track.id));      
  };

  const savePlayList = async () => {
    const uriList = playListItems.map(item => item.uri); // need to filter all items from the opendPLitems playlist
    let results;
    if (pListID) {
      results = await Spotify.addToPlayList(pListID, uriList);
    } else {
      const playlistID = Spotify.createPlaylist(playListName);
      results = await Spotify.addToPlayList(playlistID, uriList);
    }
    if (results) {
      alert("Playlist saved");
      setPayListItems([]);
      setPlayListName('');
      setPlayLists(await Spotify.getPlaylists() || []);
    } else {
      alert("Failed to save the playlist");
    }
  };

  const openPlaylist = async (playListID) => {
    const playListSongs = await Spotify.openPlaylist(playListID);
    setPayListItems(playListSongs);
    setOpenedPLitems(playListSongs);
  };

  // const filterDuplicates = () => {
  //   const newArr = playListItems.filter(item => !opendPLitems.includes(item));
  //   console.log(newArr);
  // };

  //there is a bug now that all the items are readded to the playlist even though they are already in the playlist.

  
  return (
    <>
      <div className={`${styles.row} ${styles.main} ${styles.directionColumn} ${styles.contentAligmmentCenter}`}>
        <h1>Jamming project</h1>
        <Search onSearch={search} />
      </div>
      <div className={`${styles.row} ${styles.main} ${styles.directionRow}`}>
        <SearchResults
          searchResults={searchResult}
          addTrack={addTrack}
        />
        <PlayList
          playListItems={playListItems}
          playListName={playListName}
          setPlayListName={setPlayListName}
          removeTrack={removeTrack}
          savePlayList={savePlayList}
          playLists={playLists}
          setPListID={setPListID}
          openPlaylist={openPlaylist}
        />
      </div>
    </>
  );
};

export default App;