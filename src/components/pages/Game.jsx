import React from "react";
import { useParams } from "react-router-dom";
import Nav from "../Nav";
import Footer from "../Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import FeaturedGameCard from "../FeaturedGameCard";

function Game() {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [bg, setBg] = useState("");
  const [loading, setLoading] = useState(true);

  // Get Games List
  const options = {
    method: "GET",
    url: `https://mmo-games.p.rapidapi.com/game`,
    params: { id: id },
    headers: {
      "X-RapidAPI-Key": "154af4941fmsha6145225db63e51p1a0288jsna19936e7d1c0",
      "X-RapidAPI-Host": "mmo-games.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setGame(response.data);
        if (response.data.screenshots.length != 0) {
          setBg(`url(${response.data.screenshots[0].image})`);
        } else {
          setBg(`url(${response.data.thumbnail})`);
        }
        setLoading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  console.log(game);

  return (
    <div>
      <Nav nav={["", "active-nav", "", ""]} />
      {!loading && (
        <section id="game" style={{ backgroundImage: bg }}>
          <div className="container pt-5">
            <div className="row">
              <div className="col-lg-6 px-5 px-lg-0">
                <h1 className="slanted sl fw-bold text-center w-100">
                  {game.title}
                </h1>
                <div className="row mx-auto py-3">
                  <div className="col-6">
                    Genre: <br /> <span className="fw-bold">{game.genre}</span>
                  </div>
                  <div className="col-6">
                    Publisher: <br />{" "}
                    <span className="fw-bold">{game.publisher}</span>
                  </div>
                  <div className="col-6">
                    Platform: <br />{" "}
                    <span className="fw-bold">{game.platform}</span>
                  </div>
                  <div className="col-6">
                    Developer: <br />{" "}
                    <span className="fw-bold">{game.developer}</span>
                  </div>
                </div>
                <p className="lead border-1 border p-2 bg-black">
                  {game.short_description}
                </p>
              </div>
              <div className="col-lg-6">
                <div className=" d-flex justify-content-center align-items-center">
                  <img
                    className="w-100"
                    src={game.thumbnail}
                    alt=""
                    style={{ maxWidth: "300px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      <Footer />
    </div>
  );
}

export default Game;
