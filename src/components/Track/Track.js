import React from "react";
import styles from "./Track.module.css";

export default function Track({ trackDetails }) {
  return (
    <div className={styles.track}>
      <p className={styles.title}>Track: <strong>{trackDetails.track}</strong></p>
      <p className={styles.paragraph}>Artist: <strong>{trackDetails.artist}</strong></p>
      <p className={styles.paragraph}>Album: <strong>{trackDetails.album}</strong></p>
    </div>
  );
}