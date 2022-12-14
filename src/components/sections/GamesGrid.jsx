import React from "react";
import GameCard from "../GameCard";
import { useState, useEffect } from "react";
import axios from "axios";
import Button1 from "../Button1";

function GamesGrid() {
  const [gamesList, setGamesList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(20);

  // Get Games List
  const options = {
    method: "GET",
    url: "https://mmo-games.p.rapidapi.com/games",
    headers: {
      "X-RapidAPI-Key": "154af4941fmsha6145225db63e51p1a0288jsna19936e7d1c0",
      "X-RapidAPI-Host": "mmo-games.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setGamesList(response.data);
        setLoading(false);
        console.log(gamesList);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const games = gamesList.map((game, index) => {
    if (index <= limit) {
      return <GameCard game={game} key={index} />;
    }
  });

  return (
    <section id="games-grid">
      <div className="container">
        <hr />
        <h2 className="fw-bold mb-5">Browse Games</h2>
        {!loading && (
          <div className="row row-cols-2 row-cols-lg-3 g-2 g-md-4">{games}</div>
        )}
        <div className="d-flex justify-content-center my-5">
          <Button1 onClick={() => setLimit(limit + 20)}>Load More</Button1>
        </div>
      </div>
    </section>
  );
}

export default GamesGrid;
