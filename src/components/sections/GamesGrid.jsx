import React from "react";
import GameCard from "../GameCard";
import { useState, useEffect } from "react";
import axios, { all } from "axios";
import Button1 from "../Button1";

function GamesGrid() {
  const [gamesList, setGamesList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(11);
  const [platform, setPlatform] = useState("");
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");
  const [filters, setFilters] = useState("");

  useEffect(() => {
    const filtersArray = [];
    if (platform != "") {
      filtersArray.push(`platform=${platform}`);
    }
    if (category != "") {
      filtersArray.push(`category=${category}`);
    }
    if (sort != "") {
      filtersArray.push(`sort-by=${sort}`);
    }
    setFilters(filtersArray.join("&"));
  }, [category, platform, sort]);

  // Get Games List
  const options = {
    method: "GET",
    url: `https://mmo-games.p.rapidapi.com/games?${filters}`,
    headers: {
      "X-RapidAPI-Key": "154af4941fmsha6145225db63e51p1a0288jsna19936e7d1c0",
      "X-RapidAPI-Host": "mmo-games.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setGamesList(response.data);
        setLoading(false);
        console.log("API called.");
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [filters]);

  const games = gamesList.map((game, index) => {
    if (index <= limit) {
      return <GameCard game={game} key={index} />;
    }
  });

  return (
    <section id="games-grid">
      <div className="container">
        <hr />
        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center">
          <h2 className="fw-bold">Browse Games</h2>
          <div className="d-flex align-items-start">
            <form className="d-flex flex-column flex-md-row">
              <div className="filter">
                <label className="form-label m-0" htmlFor="platform">
                  Platform
                </label>
                <select
                  className="form-select bg-dark color4"
                  name="platform"
                  id="platform"
                  onChange={(e) => {
                    setPlatform(e.target.value);
                    setLimit(11);
                    setLoading(true);
                  }}
                >
                  <option value="">All Platforms</option>
                  <option value="pc">PC</option>
                  <option value="browser">Browser</option>
                </select>
              </div>
              <div className="filter">
                <label className="form-label m-0" htmlFor="category">
                  Category
                </label>
                <select
                  className="form-select bg-dark color4"
                  name="category"
                  id="category"
                  onChange={(e) => {
                    setCategory(e.target.value);
                    setLimit(11);
                    setLoading(true);
                  }}
                >
                  <option value="">All Categories</option>
                  <option value="shooter">Shooter</option>
                  <option value="mmorpg">MMORPG</option>
                  <option value="strategy">Strategy</option>
                  <option value="moba">MOBA</option>
                  <option value="racing">Racing</option>
                  <option value="sports">Sports</option>
                  <option value="social">Social</option>
                  <option value="sandbox">Sandbox</option>
                  <option value="open-world">Open World</option>
                  <option value="survival">Survival</option>
                  <option value="pvp">PVP</option>
                  <option value="pixel">Pixel</option>
                  <option value="turn-based">Turn-Based</option>
                  <option value="side-scroller">Side-Scroller</option>
                  <option value="card">Card</option>
                  <option value=" battle-royale"> Battle-Royale</option>
                  <option value="mmo">MMO</option>
                  <option value="anime">Anime</option>
                  <option value="fantasy">Fantasy</option>
                  <option value="sci-fi">Sci-fi</option>
                  <option value="fighting">Fighting</option>
                  <option value="tower-defense">Tower-defense</option>
                  <option value="horro">Horror</option>
                </select>
              </div>
              <div className="filter">
                <label className="form-label m-0" htmlFor="sort">
                  Sort By
                </label>
                <select
                  className="form-select bg-dark color4"
                  name="sort"
                  id="sort"
                  onChange={(e) => {
                    setSort(e.target.value);
                    setLimit(11);
                    setLoading(true);
                  }}
                >
                  <option value="">None</option>
                  <option value="relevance">Relevance</option>
                  <option value="popularity">Popularity</option>
                  <option value="alphabetical">Alphabetical</option>
                  <option value="relevance">Relevance</option>
                </select>
              </div>
            </form>
          </div>
        </div>
        {!loading && (
          <div className="row row-cols-2 row-cols-lg-3 g-2 g-md-4 mt-5">
            {games}
          </div>
        )}
        <div className="d-flex justify-content-center my-5">
          <Button1 onClick={() => setLimit(limit + 12)}>Load More</Button1>
        </div>
      </div>
    </section>
  );
}

export default GamesGrid;
