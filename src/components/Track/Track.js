import React from "react";
import styles from "./Track.module.css";
import Spotify from "../../utils/Spotify"

export default function Track({ trackDetails, addTrack }) {
  
  return (
    <div className={styles.track}>
      <div>
        <p className={styles.title}>Track: <strong>{trackDetails.track}</strong></p>
        <p className={styles.paragraph}>Artist: <strong>{trackDetails.artist}</strong></p>
        <p className={styles.paragraph}>Album: <strong>{trackDetails.album}</strong></p>
      </div>
      <div>
        <div onClick={() => addTrack(trackDetails)} className={styles.addButton}>+</div>
      </div>
    </div>
    
  );
}