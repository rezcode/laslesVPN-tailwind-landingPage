import React from "react";
import Banner from "../components/Banner";
import Facilities from "../components/Facilities";
import Features from "../components/Features";
import GlobalNetwork from "../components/GlobalNetwork";
import Plans from "../components/Plans";

const Home = () => {
  return (
    <>
      <div className="lg:max-w-7xl mx-auto px-4 md:px-8">
        <Banner />
        <Facilities />
        <Features />
        <Plans />
        <GlobalNetwork />
      </div>
    </>
  );
};

export default Home;
