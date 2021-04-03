import React from "react";
import {Link} from "react-router-dom";
import withLoader from "./../withLoader";

const AuthorsList = ({authors}) => {
  const handleClick = author => {
    console.log("You clicked ", author);
  };

  return (
    <>
      {authors.map(author => (
        <Link to={`/author/${author.id}`}>
          <h2 key={author.id} onClick={() => handleClick(author)}>
            {author.name}
          </h2>
        </Link>
      ))}
    </>
  );
};

export default withLoader("authors")(AuthorsList);
