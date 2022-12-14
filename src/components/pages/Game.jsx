import React from "react";
import { useParams } from "react-router-dom";
import Nav from "../Nav";
import Footer from "../Footer";
import { useState, useEffect } from "react";
import axios from "axios";

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
                <p className="lead border-1 p-2">{game.short_description}</p>
              </div>
              <div className="col-lg-6 px-3 px-lg-5">
                <div className=" d-flex justify-content-center align-items-center">
                  <div
                    className="row g-0 play-game rounded"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      window.open(game.game_url, "_blank");
                    }}
                  >
                    <div className="col-10 rounded-start">
                      <img
                        className="w-100 rounded-start"
                        src={game.thumbnail}
                        alt=""
                        style={{ maxWidth: "300px" }}
                      />
                    </div>
                    <div className="col-2 bg-black d-flex justify-content-center align-items-center rounded-end">
                      <i className="fa-solid fa-gamepad fa-2xl"></i>
                    </div>
                  </div>
                </div>
                {game.screenshots.length == 0 && (
                  <h5 className="mt-5 text-center">
                    No screenshots available.
                  </h5>
                )}
                {/* Carousel */}
                {game.screenshots.length != 0 && (
                  <div
                    id="carouselExampleControls"
                    class="carousel slide mt-5 mb-5 mb-lg-0 border border-1"
                    data-bs-ride="carousel"
                  >
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img
                          src={game.screenshots[0].image}
                          class="d-block w-100"
                          alt="..."
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          src={game.screenshots[1].image}
                          class="d-block w-100"
                          alt="..."
                        />
                      </div>
                      <div class="carousel-item">
                        <img
                          src={game.screenshots[2].image}
                          class="d-block w-100"
                          alt="..."
                        />
                      </div>
                    </div>
                    <button
                      class="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselExampleControls"
                      data-bs-slide="prev"
                    >
                      <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                      class="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselExampleControls"
                      data-bs-slide="next"
                    >
                      <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
                )}
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
