import React from "react";

const SingleRepo = ({
  author,
  name,
  url,
  description,
  language,
  languageColor,
  stars
}: Repo) => (
  <div
    className="single-repo"
    style={{ borderBottom: `3px solid ${languageColor || "black"}` }}
  >
    <div className="single-repo__header">
      <h2>{name}</h2>
      <div className="stars-container">
        <img src={`${process.env.PUBLIC_URL || ""}/star.svg`} />
        <span>{stars}</span>
      </div>
    </div>
    <div className="single-repo__body">
      <p>
        <a href={url}>{url}</a>
      </p>
      <p>{description}</p>
      <p>
        <b>
          written in {language} by {author}
        </b>
      </p>
    </div>
  </div>
);

export default SingleRepo;
