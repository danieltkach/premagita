import React from "react";
import {SongsData} from "../../songs.data";

const Song = ({match}) => {
  const {id} = match.params;
  const songData = SongsData.filter(s => s.id == id)[0];
  const {title, author, stanzas, picture} = songData;

  return (
    <>
      <h3>{title}</h3>
      <h4>{author}</h4>
      <p>{stanzas}</p>
    </>
  );
};

// Song.defaultProps = {
// 	title: 'Sin título',
// 	stanzas: 'No hay estrofas...'
// }

export default Song;
