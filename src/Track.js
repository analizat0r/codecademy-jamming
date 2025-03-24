import React from "react";

export default function Track({ trackDetails }) {
  return (
    <div>
      <h3>Track: {trackDetails.track}</h3>
      <p>Artist: {trackDetails.artist}</p>
      <p>Album: {trackDetails.album}</p>
    </div>
  );
}