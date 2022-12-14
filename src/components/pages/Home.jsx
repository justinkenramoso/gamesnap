import React from "react";
import Nav from "../Nav";
import GameHighlight from "../sections/GameHighlight";
import Footer from "../Footer";

function Home() {
  return (
    <div>
      <Nav nav={["active-nav", "", "", ""]} />
      <GameHighlight highlightID={1} />
      <Footer />
    </div>
  );
}

export default Home;
