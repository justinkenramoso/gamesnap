import React from "react";
import Button1 from "./Button1";

function FeaturedGameCard(props) {
  const game = props.game;
  return (
    <div className="row">
      <div className="col-lg-6 text-center d-flex flex-column align-items-center align-items-lg-start justify-content-center">
        <img
          className="mb-2 featured-game-img rounded"
          src={game.thumbnail}
          alt=""
          onClick={() => {
            window.location = `/games/${game.id}`;
          }}
        />
      </div>
      <div className="col-lg-6 px-5 px-lg-0">
        <h2 className="fs-1 fw-bold slanted2 sl-2 w-100 text-center text-lg-start mt-5 mt-lg-0">
          {game.title}
        </h2>
        <p className="d-none d-md-block lead">{game.short_description}</p>
        <p className="d-block d-md-none lead fs-6">{game.short_description}</p>
        <hr />
        <div className="row">
          <div className="col-6">
            <p>
              Published by <span className="color1">{game.publisher}</span>
            </p>
            <p>
              Developed by <span className="color1">{game.developer}</span>
            </p>
          </div>
          <div className="col-6">
            <p>
              Released <span className="color1">{game.release_date}</span>
            </p>
            <Button1
              onClick={() => {
                window.location = `/games/${game.id}`;
              }}
            >
              View Details
            </Button1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedGameCard;
