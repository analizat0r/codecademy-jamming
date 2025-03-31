import React from "react";
import Track from "../Track/Track";

export default function TrackList({ tracks = [], addTrack, removeTrack, isInPlaylist }) {
  return (
    <div>
      {tracks.map(track => (
        <Track
          key={track.id}
          trackDetails={track}
          addTrack={addTrack}
          removeTrack={removeTrack}
          isInPlaylist={isInPlaylist}
        />
      ))}
    </div>
  );
}