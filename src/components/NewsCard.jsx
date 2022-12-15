import React from "react";

function NewsCard(props) {
  const news = props.news;
  return (
    <div className="col">
      <div className="news-card">
        <img
          className="w-100 rounded news-img"
          src={news.main_image}
          alt=""
          onClick={() => {
            window.open(news.article_url, "_blank");
          }}
        />
      </div>
      <h4 className="text-center mt-3 news-title fw-bold">{news.title}</h4>
      <div className="d-flex justify-content-center align-items-center">
        <p className="text-center news-desc">{news.short_description}</p>
      </div>
    </div>
  );
}

export default NewsCard;
