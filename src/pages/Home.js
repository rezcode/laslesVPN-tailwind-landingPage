import React from "react";
import Banner from "../components/Banner";
import Facilities from "../components/Facilities";
import Features from "../components/Features";
import Plans from "../components/Plans";

const Home = () => {
  return (
    <>
      <div className="lg:max-w-7xl mx-auto px-4 md:px-8">
        <Banner />
        <Facilities />
        <Features />
        <Plans />
      </div>
    </>
  );
};

export default Home;
