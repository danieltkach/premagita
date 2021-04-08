import React from "react";
// import {useHistory} from "react-router-dom";
import withLoader from "./withLoader";
import SongCard from "./SongCard";
import styled from "styled-components";

const SongsList = ({songs}) => {
  // const history = useHistory();
  return (
    <Container>
      {songs.map(song => (
        <SongCard song={song} />
      ))}
    </Container>
  );
};

export default withLoader("songs")(SongsList);

const Container = styled.div`
  padding: 10px;
  border: 1px solid yellow;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
