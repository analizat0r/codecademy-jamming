import styles from "./PlayListsList.module.css"

export default function PlayListsList({ playLists = [] }) {

    return (
        <div>
            <h2>Your Playlists</h2>
            <ul>
               {playLists.map((item) => (
                    <li key={item.id}><a href="#">{item.name}</a></li>
                ))}
            </ul>
        </div>
    );
};
