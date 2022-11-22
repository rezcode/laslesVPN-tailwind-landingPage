import React from "react";
import Ilustration1 from "../assets/images/banner.png";
import imgSurvey1 from "../assets/icons/location.png";
import imgSurvey2 from "../assets/icons/user.png";
import imgSurvey3 from "../assets/icons/servers.png";

const Home = () => {
  const section3 = [
    {
      icon: imgSurvey2,
      lable: "Users",
      total: "90+",
    },
    {
      icon: imgSurvey1,
      lable: "Locations",
      total: "30+",
    },
    {
      icon: imgSurvey3,
      lable: "Servers",
      total: "50+",
    },
  ];

  return (
    <>
      <div className="lg:max-w-7xl mx-auto px-4 md:px-8">
        <div className="items-center gap-6  grid md:grid-cols-10 pt-6">
          <div className="col-span-5 md:order-last">
            <img src={Ilustration1} alt="banner" />
          </div>
          <div className="col-span-5 py-11 md:py-0">
            <h1 className="font-medium text-4xl pb-5">
              Want anything to be easy <br />
              <span className="font-bold">with LaslesVPN.</span>
            </h1>
            <div className="font-medium text-base pb-12">
              Provide a network for all your needs with ease and fun using{" "}
              <span className="font-bold">LaslesVPN</span> discover interesting
              features from us.
            </div>
            <button className="py-4 px-16 bg-red-500 drop-shadow-3xl rounded-md text-white">
              Get Started
            </button>
          </div>
        </div>
        <div className="py-20 grid grid-cols-3 my-8 md:my-20 shadow-2xl rounded-md">
          {section3.map((item, index) => (
            <div
              key={index}
              className="flex flex-row mx-auto gap-2 items-center"
            >
              <div className="h-9 w-9 md:h-12 md:w-12">
                <img src={item.icon} alt="icon-surver" />
              </div>
              <div className="text-center">
                <div className="font-bold md:text-2xl">{item.total}</div>
                <div className="text-[12px]">{item.lable}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
