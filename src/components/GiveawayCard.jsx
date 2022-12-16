import React from "react";

function GiveawayCard(props) {
  const giveaway = props.giveaway;
  return (
    <div className="col">
      <div className="giveaway-card">
        <div className="row g-0">
          <div className="col-6">
            <img
              className="w-100 giveaway-img"
              src={giveaway.main_image}
              alt=""
              onClick={() => {
                window.open(giveaway.giveaway_url, "_blank");
              }}
            />
          </div>
          <div className="col-6">
            <h5>{giveaway.title}</h5>
            <div className="progress">
              <div
                className="progress-bar bg1 progress-bar-striped progress-bar-animated"
                role="progressbar"
                aria-label="Basic example"
                style={{ width: giveaway.keys_left }}
                aria-valuenow={giveaway.keys_left}
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <p>
              <i className="fa-solid fa-key"></i> left: {giveaway.keys_left}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GiveawayCard;
