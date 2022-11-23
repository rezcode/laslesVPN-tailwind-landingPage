import React from "react";
import Illustration3 from "../assets/images/Huge Global.png";

const GlobalNetwork = () => {
  return (
    <div className="my-20 md:my-10 text-center">
      <h1 className="font-medium text-2xl md:text-4xl mb-5">
        Huge Global Network of Fast VPN
      </h1>
      <p className="font-medium text-base text-gray-500 mb-20">
        See LaslesVPN everywhere to make it easier for you when you move
        locations.
      </p>
      <img className="mx-auto" src={Illustration3} alt="global" />
    </div>
  );
};

export default GlobalNetwork;
