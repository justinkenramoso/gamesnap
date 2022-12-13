import React from "react";

function FeaturedGameCard(props) {
  const gamesList = props.list;
  return (
    <div className="col-lg-4 d-flex justify-content-center">
      <div className="featured-game-card text-center">
        <img
          className="featured-game-img"
          src={gamesList[props.index].thumbnail}
          alt=""
        />
        <h4 className="fw-bold mt-2">{gamesList[props.index].title}</h4>
        <h6>
          {gamesList[props.index].genre} | {gamesList[props.index].platform}
        </h6>
        <p className="featured-game-desc">
          {gamesList[props.index].short_description}
        </p>
      </div>
    </div>
  );
}

export default FeaturedGameCard;
