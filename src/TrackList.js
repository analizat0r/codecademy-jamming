import React from "react";
import Track from "./Track";

export default function TrackList({ searchResults =[] }) {
  return (
    <div>
      {searchResults.map(track => (
        <Track key={track.id} trackDetails={track} />
      ))}
    </div>
  );
}