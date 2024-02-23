"use client";

import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  {
    ssr: false,
  }
);
const achievements = [
  {
    metric: "Projects",
    value: "100",
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Users",
    value: "100,0000",
  },
  {
    metric: "Awards",
    value: "10+",
  },
  {
    metric: "Years",
    value: "5",
  },
];
function AchievementSection() {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="border-[#33353F] border rounded-md py-8 px-16 flex flex-row items-center justify-between  ">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center mx-4 sm:my-0"
          >
            <h2 className="text-white text-4xl font-bold flex flex-row ">
              {achievement.prefix}
              <AnimatedNumbers
                includeComma
                animateToNumber={parseInt(achievement.value)}
                locale="en-us"
                className="text-white text-4xl font-bold"
                transitions={(index) => ({
                  type: "string",
                  mass: 1,
                  friction: 100,
                  duration: index + 0.5,
                })}
              />
              {achievement.postfix}
            </h2>
            <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AchievementSection;
