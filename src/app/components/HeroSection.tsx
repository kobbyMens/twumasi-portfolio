"use client";

import React from "react";
import Image from "next/image";
import DownloadButton from "./DownloadButton";
import { TypeAnimation } from "react-type-animation";

function HeaderSection() {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-8 place-self-center text-center sm:text-left sm:justify-self-start">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-tr from-blue-300 via-primary-400 to-secondary-400">
              Hi, I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Web Developer",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE]  text-lg lg:text-xl mb-6">
            I find it self-fulfilling to build useful products that make life a
            little bit easier and also bring satisfaction to clients.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit text-base sm:text-lg rounded-full mr-4 bg-gradient-to-br from-blue-400 via-primary-500 to-secondary-400 text-white hover:bg-slate-200">
              Hire Me
            </button>
            <DownloadButton
              fileUrl={
                "https://drive.google.com/file/d/1BgZGyNQ0Ftb0hSSXGGhOl9TdfIyAW7kH/view?usp=drive_link"
              }
            />
          </div>
        </div>
        <div className="col-span-4 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] relative lg:w-[400px] lg:h-[400px]">
            <Image
              src={"/images/cartoon-programmer.avif"}
              alt="my-portfolio-image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeaderSection;
