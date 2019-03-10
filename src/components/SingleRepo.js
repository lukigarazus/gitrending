import React from "react";

const SingleRepo = ({
  author,
  name,
  url,
  description,
  language,
  languageColor,
  stars
}) => {
  return (
    <div
      className="single-repo"
      style={{ borderBottom: `3px solid ${languageColor || "black"}` }}
    >
      <div className="single-repo__header">
        <h2>{name}</h2>
        <div className="stars-container">
          <img src={`${process.env.PUBLIC_URL}/star.svg`} />
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
      <style jsx>{`
        .single-repo {
          border-radius: 3px;
        }
        .single-repo__header {
        }
        .single-repo__header {
          display: flex;
          justify-content: space-between;
          padding: 0 10px;
        }
        .stars-container {
          display: flex;
          align-items: center;
        }
        .stars-container > img {
          margin-right: 10px;
        }
        .single-repo__body {
          height: 0;
          transition: height 0.4s;
          transition-delay: 0.2s;
          overflow: hidden;
        }
        .single-repo__body:hover,
        .single-repo__header:hover ~ .single-repo__body {
          height: 150px;
        }
      `}</style>
    </div>
  );
};

export default SingleRepo;
