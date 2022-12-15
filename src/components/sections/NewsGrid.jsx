import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import NewsCard from "../NewsCard";
import Button1 from "../Button1";

function NewsGrid() {
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(11);

  // Get Games List
  const options = {
    method: "GET",
    url: "https://mmo-games.p.rapidapi.com/latestnews",
    headers: {
      "X-RapidAPI-Key": "154af4941fmsha6145225db63e51p1a0288jsna19936e7d1c0",
      "X-RapidAPI-Host": "mmo-games.p.rapidapi.com",
    },
  };

  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        setNewsList(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  const news = newsList.map((news, index) => {
    if (index <= limit) {
      return <NewsCard news={news} key={index} />;
    }
  });

  console.log(newsList);
  return (
    <section id="news-grid">
      <div className="container py-3">
        <h2 className="fw-bold fs-1">Latest Articles</h2>
        {!loading && (
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gy-4 gx-5 mt-3 p-0 p-lg-5">
            {news}
          </div>
        )}
        <div className="d-flex justify-content-center my-5">
          <Button1 onClick={() => setLimit(limit + 12)}>Load More</Button1>
        </div>
      </div>
    </section>
  );
}

export default NewsGrid;
