import React from "react";
import imgSurvey1 from "../assets/icons/location.png";
import imgSurvey2 from "../assets/icons/user.png";
import imgSurvey3 from "../assets/icons/servers.png";

const Facilities = () => {
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
      <div className="pt-10 pb-10 md:pt-15 md:pb-15 grid grid-cols-3 my-8 md:my-20 shadow-2xl rounded-md">
        {section3.map((item, index) => (
          <div key={index} className="flex flex-row mx-auto gap-3 items-center">
            <div className="h-9 w-9 md:h-12 md:w-12">
              <img src={item.icon} alt="icon-surver" />
            </div>
            <div>
              <div className="font-bold md:text-2xl">{item.total}</div>
              <div className="text-[12px]">{item.lable}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Facilities;
