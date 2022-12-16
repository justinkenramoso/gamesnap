import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import FeaturedGameCard from "../FeaturedGameCard";
import Loading from "../sections/Loading";

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
        console.log("API called.");
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  console.log(gamesList);
  return (
    <section id="featured-games">
      <div className="container">
        <h2 className="py-3 fw-bold">FEATURED</h2>
        {loading && <Loading />}
        {!loading && <FeaturedGameCard game={gamesList[31]} />}
      </div>
    </section>
  );
}

export default FeaturedGames;
