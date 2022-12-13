import React, { useState } from "react";
import axios from "axios";

const baseUrl = "https://mmo-games.p.rapidapi.com";

function GameHighlight(props) {
  const highlightGameID = props.highlightID;
  const [highlightGameImg, setHighlightGameImg] = useState("");
  const [highlightGameThumbnail, setHighlightGameThumbnail] = useState("");
  const [highlightGameHeader, setHighlightGameHeader] = useState("");
  const [highlightGameTitle, setHighlightGameTitle] = useState("");
  const [highlightGameGenre, setHighlightGameGenre] = useState("");
  const [highlightGamePlatform, setHighlightGamePlatform] = useState("");

  const options = {
    method: "GET",
    url: `${baseUrl}/game?id=${highlightGameID}`,
    headers: {
      "X-RapidAPI-Key": "154af4941fmsha6145225db63e51p1a0288jsna19936e7d1c0",
      "X-RapidAPI-Host": "mmo-games.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      setHighlightGameImg(response.data.screenshots[0].image);
      setHighlightGameHeader(response.data.short_description);
      setHighlightGameTitle(response.data.title);
      setHighlightGameGenre(response.data.genre);
      setHighlightGamePlatform(response.data.platform);
      setHighlightGameThumbnail(response.data.thumbnail);
    })
    .catch(function (error) {
      console.error(error);
    });

  // --------------------------------------------------------------------->
  return (
    <section
      id="highlight"
      style={{ backgroundImage: `url(${highlightGameImg})` }}
    >
      <div className="container py-5">
        <div className="highlight-game-info">
          <p className="p-0 m-0 fw-bold">Game of the Week</p>
          <h2 className="fs-1 fw-bold highlight-game-title">
            {highlightGameTitle}
          </h2>
          <h6>
            {highlightGameGenre} | {highlightGamePlatform}
          </h6>
          <p className="lead highlight-game-desc mb-0">{highlightGameHeader}</p>
          <p className="lead m-0 p-0">
            ...{" "}
            <a className="read-more" href="#">
              Read More
            </a>
          </p>
          <br />
          <div className="d-flex justify-content-center">
            <img
              className="highlight-game-thumbnail"
              src={highlightGameThumbnail}
              alt="highlight Game Thumbnail"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default GameHighlight;
