import React from "react";
import Nav from "../Nav";
import Header from "../sections/Header";
import FeaturedGames from "../sections/FeaturedGames";
import GamesGrid from "../sections/GamesGrid";

function Games() {
  return (
    <div>
      <Nav nav={["", "active-nav", "", ""]} />
      <Header
        page="games"
        title="GAMES"
        headline="Games Galore! Check Out Our Collection of Free Games on
                GameSnap!"
        welcome="Welcome to GameSnap!"
        content1="We are proud to offer our collection of free games for your entertainment and enjoyment."
        content2="Our library includes a wide variety of genres, from adventure to strategy and more."
        content3="Whether you're looking for a quick pick-me-up or an intense gaming session, we have something that will suit your needs."
        lead="So what are you waiting for? Check out our library of free games and start playing today!"
      />
      <FeaturedGames highlightID={4} />
      <GamesGrid />
    </div>
  );
}

export default Games;
