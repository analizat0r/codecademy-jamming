import React from "react";
import styles from "./Track.module.css";

export default function Track({ trackDetails }) {
  return (
    <div className={styles.track}>
      <p className={styles.title}>Track: {trackDetails.track}</p>
      <p>Artist: {trackDetails.artist}</p>
      <p>Album: {trackDetails.album}</p>
    </div>
  );
}