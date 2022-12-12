import React, { useState } from "react";
import axios from "axios";

function Landing() {
  const [landingGameImg, setLandingGameImg] = useState("");
  const [landingGameThumbnail, setLandingGameThumbnail] = useState("");
  const [landingGameHeader, setLandingGameHeader] = useState("");
  const [landingGameTitle, setLandingGameTitle] = useState("");
  const [landingGameGenre, setLandingGameGenre] = useState("");
  const [landingGamePlatform, setLandingGamePlatform] = useState("");

  const options = {
    method: "GET",
    url: `https://mmo-games.p.rapidapi.com/game?id=1`,
    headers: {
      "X-RapidAPI-Key": "154af4941fmsha6145225db63e51p1a0288jsna19936e7d1c0",
      "X-RapidAPI-Host": "mmo-games.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      setLandingGameImg(response.data.screenshots[0].image);
      setLandingGameHeader(response.data.short_description);
      setLandingGameTitle(response.data.title);
      setLandingGameGenre(response.data.genre);
      setLandingGamePlatform(response.data.platform);
      setLandingGameThumbnail(response.data.thumbnail);
    })
    .catch(function (error) {
      console.error(error);
    });

  // --------------------------------------------------------------------->
  return (
    <section id="landing" style={{ backgroundImage: `url(${landingGameImg})` }}>
      <div className="container py-5">
        <div className="landing-game-info">
          <h2 className="fs-1 fw-bold">{landingGameTitle}</h2>
          <h6>
            {landingGameGenre} | {landingGamePlatform}
          </h6>
          <p className="lead landing-game-title mb-0">{landingGameHeader}</p>
          <p className="lead">
            ...{" "}
            <a className="read-more" href="#">
              Read More
            </a>
          </p>
          <br />
          <div className="d-flex justify-content-center">
            <img
              className="landing-game-thumbnail"
              src={landingGameThumbnail}
              alt="Landing Game Thumbnail"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Landing;
