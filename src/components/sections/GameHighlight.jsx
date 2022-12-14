import React, { useEffect, useState } from "react";
import axios from "axios";

const baseUrl = "https://mmo-games.p.rapidapi.com";

function GameHighlight(props) {
  const highlightGameID = props.highlightID;
  const [highlightGame, setHighlightGame] = useState({});
  const [loading, setLoading] = useState(true);

  const options = {
    method: "GET",
    url: "https://mmo-games.p.rapidapi.com/game",
    params: { id: highlightGameID },
    headers: {
      "X-RapidAPI-Key": "154af4941fmsha6145225db63e51p1a0288jsna19936e7d1c0",
      "X-RapidAPI-Host": "mmo-games.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setHighlightGame(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  console.log(highlightGame);

  // --------------------------------------------------------------------->
  return (
    <>
      {loading && <h2>Loading...</h2>}
      {!loading && (
        <section
          id="highlight"
          style={{
            backgroundImage: `url(${highlightGame.screenshots[0].image})`,
          }}
        >
          <div className="container py-5">
            <div className="highlight-game-info">
              <p className="p-0 m-0 fw-bold">Game Highlight</p>
              <h2 className="fs-1 fw-bold highlight-game-title">
                {highlightGame.title}
              </h2>
              <h6>
                {highlightGame.genre} | {highlightGame.platform}
              </h6>
              <p className="lead highlight-game-desc mb-0">
                {highlightGame.short_description}
              </p>
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
                  src={highlightGame.thumbnail}
                  alt="highlight Game Thumbnail"
                />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default GameHighlight;
