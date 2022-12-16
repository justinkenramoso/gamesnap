import React from "react";
import Header from "../sections/Header";
import Nav from "../Nav";
import Footer from "../Footer";
import GiveawaysGrid from "../sections/GiveawaysGrid";

function Giveaways() {
  return (
    <div>
      <Nav nav={["", "", "", "active-nav"]} />
      <Header
        page="giveaways"
        title="GIVEAWAYS"
        headline="Latest Giveaways, Coupons and Freebies, and more!"
        welcome="Welcome to GameSnap Giveaways!"
        content1="Are you a gaming enthusiast looking for the latest and greatest gaming giveaways, coupons, and freebies?"
        content2="Look no further! We have rounded up the best gaming deals currently available."
        content3="Get the most out of your gaming experience."
        lead="Get ready to save big on the newest games, consoles, accessories, and more!"
      />
      <GiveawaysGrid />
      <Footer />
    </div>
  );
}

export default Giveaways;
