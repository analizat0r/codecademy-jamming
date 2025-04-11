import styles from "./PlayListsList.module.css"

export default function PlayListsList({ playLists = [], setPlayListName, openPlaylist, setPListID }) {

    const handleClick = (event) => {
        const playlistID = event.currentTarget.dataset.id;
        const playlistName = event.currentTarget.dataset.name;
        setPListID(playlistID);
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
