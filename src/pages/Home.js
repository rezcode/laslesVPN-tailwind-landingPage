import React from "react";
import Ilustration1 from "../assets/images/banner.png";

const Home = () => {
  return (
    <>
      <div className="px-4 items-center mx-auto lg:max-w-7xl md:px-8 grid md:grid-cols-10 pt-6">
        <div className="col-span-5 md:order-last">
          <img src={Ilustration1} alt="banner" />
        </div>
        <div className="col-span-5 py-11 md:py-0">
          <h1 className="font-medium text-4xl pb-5">
            Want anything to be easy <br />
            <span className="font-bold">with LaslesVPN.</span>
          </h1>
          <div className="font-medium text-xs pb-12">
            Provide a network for all your needs with ease and fun using
            LaslesVPN discover interesting features from us.
          </div>
          <button className="py-4 px-16 bg-red-500 drop-shadow-3xl rounded-md text-white">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
