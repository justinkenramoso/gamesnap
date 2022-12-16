import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import GiveawayCard from "../GiveawayCard";

function GiveawaysGrid() {
  const [giveawayList, setGiveawayList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(11);

  // Get Games List
  const options = {
    method: "GET",
    url: "https://mmo-games.p.rapidapi.com/giveaways",
    headers: {
      "X-RapidAPI-Key": "154af4941fmsha6145225db63e51p1a0288jsna19936e7d1c0",
      "X-RapidAPI-Host": "mmo-games.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setGiveawayList(response.data);
        setLoading(false);
        console.log("API called.");
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const giveaways = giveawayList.map((giveaway, index) => {
    if (index <= limit) {
      return <GiveawayCard giveaway={giveaway} key={index} />;
    }
  });

  return (
    <section id="giveaways-grid">
      <div className="container py-3">
        <h2 className="fw-bold">Get 'em before they disappear!</h2>
        {!loading && (
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 gx-3 gy-5 mt-3">
            {giveaways}
          </div>
        )}
      </div>
    </section>
  );
}

export default GiveawaysGrid;
