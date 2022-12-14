import React from "react";
import Button1 from "./Button1";

function FeaturedGameCard(props) {
  const game = props.game;
  return (
    <div className="row">
      <div className="col-lg-6 text-center d-flex flex-column align-items-center align-items-lg-start">
        <img className="mb-2 featured-game-img" src={game.thumbnail} alt="" />
        <ul className="list-group rounded-0 featured-game-ul">
          <li className="list-group-item">Genre: {game.genre}</li>
          <li className="list-group-item">Platform: {game.platform}</li>
          <li className="list-group-item">
            <a
              className="color1 text-decoration-none"
              href={game.game_url}
              target="_blank"
              rel="noreferrer"
            >
              Visit Game Site
            </a>
          </li>
        </ul>
      </div>
      <div className="col-lg-6 px-5 px-lg-0">
        <h2 className="fs-1 fw-bold slanted2 sl-2 w-100 text-center text-lg-start mt-5 mt-lg-0">
          {game.title}
        </h2>
        <p className="lead">{game.short_description}</p>
        <hr />
        <div className="row">
          <div className="col-6">
            <p>Published by {game.publisher}</p>
            <p>Developed by {game.developer}</p>
          </div>
          <div className="col-6">
            <p>Released {game.release_date}</p>
            <Button1>View Game</Button1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedGameCard;
