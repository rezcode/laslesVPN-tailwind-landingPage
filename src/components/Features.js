import React from "react";
import Ilustration2 from "../assets/images/features.png";
import checkIcon from "../assets/icons/checked.png";

const Features = () => {
  const features = [
    "Powerfull online protection.",
    "Internet without borders.",
    "Supercharged VPN",
    "No specific time limits.",
  ];

  return (
    <>
      <div className="grid md:grid-cols-2 my-10 items-center">
        <div>
          <img src={Ilustration2} alt="features" />
        </div>
        <div>
          <div className="mb-5 text-2xl md:text-4xl font-medium mt-6">
            We Provide Many Features <br /> You Can Use
          </div>
          <div className="mb-5">
            You can explore the features that we provide with fun and have their
            own functions each feature.
          </div>
          <div>
            {features.map((item, index) => (
              <div key={index} className="flex space-x-3 md:py-4 items-center">
                <img
                  src={checkIcon}
                  className="md:h-6 md:w-6 h-5 w-5"
                  alt="check-features"
                />
                <div>{item}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
