import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

const handleClick = song => {
  console.log("You clicked ", song);
  // history.push(`/song/${song.id}`);
};

const SongCard = ({song}) => {
  return (
    <Card>
      <Link to={`/song/${song.id}`}>
        <h2 key={song.id} onClick={() => handleClick(song)}>
          {song.title}
        </h2>
      </Link>
    </Card>
  );
};

export default SongCard;

const Card = styled.div`
  width: 200px;
  height: 300px;
  margin: 10px;
  padding: 5px;
  border: 1px solid gray;
`;
