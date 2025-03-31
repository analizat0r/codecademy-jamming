import React from "react";
import styles from "./Track.module.css";

export default function Track({ trackDetails, addTrack, removeTrack, isInPlaylist}) {
  
  return (
    <div className={styles.track}>
      <div>
        <p className={styles.title}>Track: <strong>{trackDetails.track}</strong></p>
        <p className={styles.paragraph}>Artist: <strong>{trackDetails.artist}</strong></p>
        <p className={styles.paragraph}>Album: <strong>{trackDetails.album}</strong></p>
      </div>
      <div>
        {isInPlaylist ? (
          <div onClick={() => removeTrack(trackDetails)} className={styles.addButton}>-</div>
        ) : (
          <div onClick={() => addTrack(trackDetails)} className={styles.addButton}>+</div>
        )}
      </div>
    </div>
    
  );
}