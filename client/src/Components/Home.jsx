import React from "react";
import Hero from "../Home/Hero";
import Trending from "../Home/Trending";
import Devotional from "../Home/Devotional";
import Creater from "../Home/Creater";

function Home() {
  return (
    <div>
      <Hero />
      <Trending />
      <Devotional />
      <Creater />
    </div>
  );
}

export default Home;
