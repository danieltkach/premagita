import React, {useContext} from "react";
import withLoader from "./withLoader";
import SongCard from "./SongCard";
import styled from "styled-components";
import {SongsContext} from "../context/SongsContext";

const SongsList = () => {
  const songs = useContext(SongsContext);
  return (
    <Container>
      {songs.map(song => (
        <SongCard song={song} />
      ))}
    </Container>
  );
};

export default SongsList;

const Container = styled.div`
  padding: 10px;
  border: 1px solid yellow;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
