import React from "react";
import {AuthorsData} from "../json data/authors.data";

const Author = ({match}) => {
  const {id} = match.params;
  const authorData = AuthorsData.filter(s => s.id == id)[0];
  const {name, picture, bio} = authorData;

  return (
    <>
      <h3>{name}</h3>
      <p>{bio}</p>
    </>
  );
};

// Song.defaultProps = {
// 	title: 'Sin título',
// 	stanzas: 'No hay estrofas...'
// }

export default Author;
