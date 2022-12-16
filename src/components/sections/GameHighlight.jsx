import React, { useEffect, useState } from "react";
import axios from "axios";
import Button1 from "../Button1";
import Loading from "../sections/Loading";

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
      {loading && <Loading />}
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
              <br />
              <div className="d-flex flex-column align-items-center justify-content-center">
                <Button1
                  onClick={() => {
                    window.location = "/games/1";
                  }}
                >
                  <h4 className="fw-bold pt-2">
                    <i className="fa-solid fa-gamepad"></i> VIEW GAME
                  </h4>
                </Button1>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default GameHighlight;
