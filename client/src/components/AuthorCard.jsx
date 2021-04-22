import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

const handleClick = author => {
  console.log("You clicked ", author);
  // history.push(`/song/${song.id}`);
};

const AuthorCard = ({author}) => {
  return (
    <Card>
      <Link to={`/author/${author.id}`}>
        <h2 key={author.id} onClick={() => handleClick(author)}>
          {author.title}
        </h2>
      </Link>
    </Card>
  );
};

export default AuthorCard;

const Card = styled.div`
  width: 200px;
  height: 300px;
  margin: 10px;
  padding: 5px;
  border: 1px solid gray;
`;
