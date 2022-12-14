import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import FeaturedGameCard from "../FeaturedGameCard";

function FeaturedGames(props) {
  const [gamesList, setGamesList] = useState([]);
  const [loading, setLoading] = useState(true);

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

  console.log(gamesList);
  return (
    <section id="featured-games">
      <div className="container">
        <h2 className="my-3 fw-bold">FEATURED GAME</h2>
        {!loading && (
          // <div className="row">
          <FeaturedGameCard game={gamesList[19]} />
          //   <FeaturedGameCard index={29} list={gamesList} />
          //   <FeaturedGameCard index={80} list={gamesList} />
          // </div>
        )}
      </div>
    </section>
  );
}

export default FeaturedGames;
