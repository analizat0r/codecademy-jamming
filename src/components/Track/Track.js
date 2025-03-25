import React from "react";
import styles from "./Track.module.css";

export default function Track({ trackDetails }) {
  return (
    <div className={styles.track}>
      <h3>Track: {trackDetails.track}</h3>
      <p>Artist: {trackDetails.artist}</p>
      <p>Album: {trackDetails.album}</p>
    </div>
  );
}