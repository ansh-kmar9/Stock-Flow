// HomePage.js

import Hero from "./Hero";
import Stats from "./Stats";
import Awards from "./Awards";
import Pricing from "./Pricing";

const HomePage = () => {
  return (
    <div className="bg-white">
      <Hero />
      <Stats />
      <Awards />
      <Pricing />
    </div>
  );
};

export default HomePage;
