import TrackList from "../TrackList/TrackList";
import styles from "./PlayList.module.css";
import PlayListsList from "../PlayListsList/PlayListsList";

export default function PlayList({ playListItems, setPlayListName, setPayListItems, playListName, removeTrack, savePlayList, playLists, setPListID, openPlaylist }) {
    
    function handleChange(event) {
        setPlayListName(event.target.value);
    };

    async function handleSubmit(event){
        event.preventDefault();
        if (!playListName) {
            alert("Enter playlist name")
        } else {
            savePlayList();
        }
    };

    function handleClear() {
        setPlayListName('');
        setPayListItems([]);
        setPListID('');
    }

    return (
        <div className={styles.main}>
            <h2>CREATE A PLAYLIST</h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input type="text" name="playlistName" id="playlistName" placeholder="Enter playlist name" value={playListName} onChange={handleChange}></input>
                <button type="submit">Save to Spotify</button>
            </form>
            <button className={styles.linkBtn} onClick={handleClear}>Clear list</button>
            <TrackList tracks={playListItems} isInPlaylist={true} removeTrack={removeTrack} />
            <PlayListsList playLists={playLists} setPListID={setPListID} setPlayListName={setPlayListName} openPlaylist={openPlaylist} />
        </div>
    );
};