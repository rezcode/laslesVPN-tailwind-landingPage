import React from "react";
import Ilustration1 from "../assets/images/banner.png";

const Banner = () => {
  return (
    <>
      <div className="items-center gap-6  grid md:grid-cols-10 pt-6">
        <div className="col-span-5 md:order-last">
          <img src={Ilustration1} alt="banner" />
        </div>
        <div className="col-span-5 py-11 md:py-0">
          <h1 className="font-medium text-4xl pb-5">
            Want anything to be easy <br />
            <span className="font-bold">with LaslesVPN.</span>
          </h1>
          <div className="font-medium text-gray-500 text-base pb-12">
            Provide a network for all your needs with ease and fun using{" "}
            <span className="font-bold">LaslesVPN</span> discover interesting
            features from us.
          </div>
          <button className="py-4 px-16 bg-red-500 hover:bg-red-600 drop-shadow-3xl rounded-md text-white">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default Banner;
