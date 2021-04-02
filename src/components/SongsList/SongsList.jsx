import React from "react";
import {useHistory} from "react-router-dom";

const SongsList = ({songs}) => {
  const history = useHistory();
  const handleClick = song => {
    console.log("You clicked ", song);

    history.push(`/song/${song.id}`);
  };

  return (
    <>
      {songs.map(song => (
        <h2 key={song.id} onClick={() => handleClick(song)}>
          {song.title}
        </h2>
      ))}
    </>
  );
};

export default SongsList;
