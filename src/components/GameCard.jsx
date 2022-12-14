import React from "react";

function GameCard(props) {
  const game = props.game;

  function getGame(gameID) {
    window.location = `/games/${gameID}`;
  }

  return (
    <div className="col">
      <div className="game-card rounded" onClick={() => getGame(game.id)}>
        <img className="rounded w-100" src={game.thumbnail} alt="" />
        <div className="overlay rounded">
          <div className="content h-100">
            <div className="d-none d-md-flex flex-column justify-content-center align-items-center h-100 text-center p-3">
              <h3 className="fw-bold">{game.title}</h3>
              <h4>{game.genre}</h4>
              <h4>{game.platform}</h4>
            </div>
            <div className="d-flex d-md-none flex-column justify-content-center align-items-center h-100 text-center p-3">
              <h5 className="fw-bold">{game.title}</h5>
              <h6>{game.genre}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameCard;
