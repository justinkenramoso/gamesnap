import React from "react";
import Nav from "../Nav";
import GameHighlight from "../sections/GameHighlight";

function Home() {
  return (
    <div>
      <Nav nav={["active-nav", "", "", ""]} />
      <GameHighlight highlightID={1} />
    </div>
  );
}

export default Home;
