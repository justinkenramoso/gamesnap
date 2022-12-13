import React from "react";
import Nav from "../Nav";
import Header from "../sections/Header";

function News() {
  return (
    <div>
      <Nav nav={["", "", "active-nav", ""]} />
      <Header
        page="news"
        title="NEWS"
        headline="Stay Up-To-Date With the Latest News and Updates From the World of Gaming!"
        welcome="Welcome to GameSnap News!"
        content1="Your go-to source for the latest and greatest news about gaming."
        content2="We’ll keep you up to date on the hottest releases and biggest events."
        content3="Never miss the most innovative trends in gaming."
        lead="So, stay tuned for everything GameSnap has to offer!"
      />
    </div>
  );
}

export default News;
