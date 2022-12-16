import React from "react";
import { useParams } from "react-router-dom";
import Nav from "../Nav";
import Footer from "../Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import $ from "jquery";
import * as DOMPurify from "dompurify";
import Loading from "../sections/Loading";

function Game() {
  const { id } = useParams();
  const [game, setGame] = useState(null);
  const [bg, setBg] = useState("");
  const [loading, setLoading] = useState(true);
  const [desc, setDesc] = useState("No description.");

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
        setDesc(response.data.description);

        setLoading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  console.log(game);
  $("#desc-div").html(desc);

  // const carousel = game.screenshots.map((image, index) => {
  //   return (
  //     <div className="carousel-item">
  //       <img
  //         src={game.screenshots[index].image}
  //         className="d-block w-100"
  //         alt="..."
  //       />
  //     </div>
  //   );
  // });

  return (
    <div>
      <Nav nav={["", "active-nav", "", ""]} />
      {loading && <Loading />}
      {!loading && (
        <section id="game" style={{ backgroundImage: bg }} className="">
          <div className="container py-5">
            <h1
              className="slanted sl fw-bold text-center"
              style={{ maxWidth: "400px" }}
            >
              {game.title}
            </h1>
            <div className="row">
              <div className="col-lg-6 d-flex flex-column justify-content-center">
                <div className="row mx-auto py-3">
                  <div className="col-6">
                    <p className="m-0 p-0">Genre</p>
                    <h5 className="fw-bold color1">{game.genre}</h5>
                  </div>
                  <div className="col-6">
                    <p className="m-0 p-0">Publisher</p>
                    <h5 className="fw-bold color1">{game.publisher}</h5>
                  </div>
                  <div className="col-6">
                    <p className="m-0 p-0">Platform</p>
                    <h5 className="fw-bold color1">{game.platform}</h5>
                  </div>
                  <div className="col-6">
                    <p className="m-0 p-0">Developer</p>
                    <h5 className="fw-bold color1">{game.developer}</h5>
                  </div>
                  <div className="col-12">
                    <p className="mt-3 p-0">
                      Release Date:{" "}
                      <span className="fw-bold color1 fs-5">
                        {game.release_date}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 d-flex justify-content-center">
                <video
                  autoPlay
                  loop
                  style={{ maxWidth: "100%" }}
                  className="border border-2"
                >
                  <source
                    src={`https://www.mmobomb.com/g/${game.id}/videoplayback.webm`}
                    type="video/webm"
                  />
                  <source
                    src={`https://www.mmobomb.com/g/${game.id}/videoplayback.mp4`}
                    type="video/mp4"
                  />
                  No video available.
                </video>
              </div>
            </div>
          </div>
          <div className="col-lg-6 px-3 px-lg-5"></div>
        </section>
      )}

      {!loading && (
        <section id="game-fulldesc">
          <div className="container my-3 mb-5 px-4 px-lg-5">
            <div className="row">
              <div className="col-lg-6">
                <h3 className="fw-bold">Game Description</h3>
                <hr />
                <div
                  className="lead"
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(desc),
                  }}
                ></div>
                <em>
                  All information and media belongs to the
                  publishers/developers.
                </em>
              </div>
              <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center p-lg-5">
                <div
                  className="row g-0 play-game rounded my-5"
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
                  <div className="col-2 bg-black d-flex flex-column justify-content-center align-items-center rounded-end">
                    <h5 className="pb-2 fw-bold">PLAY</h5>
                    <i className="m-0 fa-solid fa-gamepad fa-2xl"></i>
                  </div>
                </div>
                {/* System Req */}
                {!game.hasOwnProperty("minimum_system_requirements") && (
                  <div className="mt-3">
                    <p>
                      <em>{game.title}</em> is a{" "}
                      <span className="color1">browser based game</span> and
                      should run smoothly on practically any PC with a updated
                      web-browser.
                    </p>
                    <p>
                      If you have old hardware or software, you may still be
                      able to play <em>{game.title}</em>, but your game
                      experience may suffer. For the best gameplay experience,
                      we recommend the latest versions of Chrome, Firefox, or
                      Microsoft Edge.
                    </p>
                  </div>
                )}
                {game.hasOwnProperty("minimum_system_requirements") && (
                  <div className="mt-3">
                    <h5 className="mb-3">Minimum System Requirements:</h5>
                    <table className="table table-dark table-striped-columns table-hover text-center">
                      <tbody>
                        <tr>
                          <td>Operating System</td>
                          <td>{game.minimum_system_requirements.os}</td>
                        </tr>
                        <tr>
                          <td>Processor</td>
                          <td>{game.minimum_system_requirements.processor}</td>
                        </tr>
                        <tr>
                          <td>Graphics</td>
                          <td>{game.minimum_system_requirements.graphics}</td>
                        </tr>
                        <tr>
                          <td>Memory</td>
                          <td>{game.minimum_system_requirements.memory}</td>
                        </tr>
                        <tr>
                          <td>Storage</td>
                          <td>{game.minimum_system_requirements.storage}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>

            <hr />
            <h4 className="text-center">Gameplay Screenshots</h4>
            <div className="d-flex justify-content-center">
              {game.screenshots.length < 1 && (
                <h5 className="mt-5 text-center">No screenshots available.</h5>
              )}
              {/* Carousel */}
              {game.screenshots.length > 0 && (
                <div
                  id="carouselExampleControls"
                  className="carousel slide carousel-fade mb-5 mb-lg-0 border border-1"
                  data-bs-ride="carousel"
                  style={{ maxWidth: "700px" }}
                >
                  <div className="carousel-inner">
                    {game.screenshots.map((image, index) => {
                      if (index == 0) {
                        return (
                          <div className="carousel-item active" key={index}>
                            <img
                              src={game.screenshots[index].image}
                              className="d-block w-100"
                              alt="..."
                            />
                          </div>
                        );
                      } else {
                        return (
                          <div className="carousel-item" key={index}>
                            <img
                              src={game.screenshots[index].image}
                              className="d-block w-100"
                              alt="..."
                            />
                          </div>
                        );
                      }
                    })}
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
      )}
      <Footer />
    </div>
  );
}

export default Game;
