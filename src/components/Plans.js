import React from "react";
import plan1 from "../assets/images/Free.png";
import plan2 from "../assets/images/Standard.png";
import plan3 from "../assets/images/Premium.png";
import checkIcon from "../assets/icons/unchecked.png";

const Plans = () => {
  const plans = [
    {
      icon: plan1,
      lable: "Free Plan",
      features: [
        "Unlimited Bandwitch",
        "Encrypted Connection",
        "No Traffic Logs",
        "Works on All Devices",
      ],
      price: "Free",
    },
    {
      icon: plan2,
      lable: "Standard Plan",
      features: [
        "Unlimited Bandwitch",
        "Encrypted Connection",
        "Yes Traffic Logs",
        "Works on All Devices",
        "Connect Anyware",
      ],
      price: "$9",
    },
    {
      icon: plan3,
      lable: "Premium Plan",
      features: [
        "Unlimited Bandwitch",
        "Encrypted Connection",
        "No Traffic Logs",
        "Works on All Devices",
        "Connect Anyware",
        "Get New Features",
      ],
      price: "$12",
    },
  ];

  return (
    <>
      <div className="text-center mt-20">
        <div className="font-medium text-4xl mb-5">Choose Your Plan</div>
        <div className="text-base font-normal mb-14 text-gray-500">
          Let's choose the package that is best for you and explore it happily
          and cheerfully.
        </div>
      </div>
      <div className="md:grid md:grid-cols-3 ">
        {plans.map((item, index) => (
          <div
            key={index}
            className="relative mx-auto border px-20 last:border-red-500 pt-10 md:pt-20 pb-72 mb-9 md:mb-20 rounded-md"
          >
            <img src={item.icon} className="mx-auto mb-7" alt="plan-icons" />
            <div className="text-center mb-7 font-medium text-lg">
              {item.lable}
            </div>
            {item.features.map((val, e) => (
              <div key={e} className="flex space-x-3 md:mb-5">
                <img
                  src={checkIcon}
                  className="h-5 w-5 md:h-7 md:w-7"
                  alt="checked-icon"
                />
                <div className="text-gray-500">{val}</div>
              </div>
            ))}
            <div>
              <div className="absolute inset-x-0 bottom-16 md:bottom-20">
                <div className="text-center font-medium text-2xl my-5">
                  {item.price === "Free" ? (
                    <>{item.price}</>
                  ) : (
                    <>
                      {item.price}{" "}
                      <span className="text-gray-500 font-normal">/ mo</span>
                    </>
                  )}
                </div>
                <div className="text-center">
                  <button className="px-11 py-3 font-bold rounded-full text-red-500 hover:bg-gray-50 border-red-500 border">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Plans;
