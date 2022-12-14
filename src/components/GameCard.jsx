import React from "react";

function GameCard(props) {
  const game = props.game;
  return (
    <div className="col">
      <div className="game-card rounded">
        <img className="rounded w-100" src={game.thumbnail} alt="" />
        <div className="overlay rounded">
          <div className="content h-100">
            <div className="d-flex flex-column justify-content-center align-items-center h-100 text-center">
              <h3 className="fw-bold">{game.title}</h3>
              <h4>{game.genre}</h4>
              <h4>{game.platform}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameCard;
