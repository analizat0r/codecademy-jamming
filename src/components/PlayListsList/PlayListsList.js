import styles from "./PlayListsList.module.css"

export default function PlayListsList({ playLists = [], setPlayListID, setPlayListName, openPlaylist }) {

    const handleClick = (event) => {
        const playlistID = event.currentTarget.dataset.id;
        const playlistName = event.currentTarget.dataset.name;

        setPlayListID(playlistID);
        setPlayListName(playlistName);
        openPlaylist(playlistID);
    }

    return (
        <div>
            <h2>Your Playlists</h2>
            <ul>
               {playLists.map((item) => (
                    <li
                        key={item.id}
                        data-id={item.id}
                        data-name={item.name}
                        onClick={handleClick}
                    >
                        <a href="#">{item.name}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};
