"use client";
import React from "react";
import {
  FacebookIcon,
  LinkedinIcon,
  InstagramIcon,
  GithubIcon,
} from "next-share";
import Education from "@/components/Education";
import SoftwareSkills from "@/components/SoftwareSkills";
import Languages from "@/components/Languages";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";

type CardProps = {
  name: String;
};

const Card = ({ name }: CardProps) => {
  const handleRedirctTo = (target: string) => {
    switch (target) {
      case "github":
        window.location.replace("https://github.com/Ayush-Noorani");
        break;
      case "linkedIn":
        window.location.replace("https://www.linkedin.com/in/ayush-noorani/");
        break;
      case "instagram":
        window.location.replace("https://www.instagram.com/_ayush.noorani_/");
        break;
    }
  };
  return (
    <div
      className="w-full relative border-solid border-2 border-black mt-5 bg-cover"
      style={
        name == "Home"
          ? {
              backgroundImage: `url(/background1.jpg)`,
              height: "75%",
            }
          : {
              backgroundImage: `url(/bg2.jpg)`,
              height: "auto",
            }
      }
    >
      {name == "Home" && (
        <div className="w-full h-full flex flex-row absolute text-white items-center">
          <div className="w-1/2 h-full">
            <div className="mt-2 ml-2 md:mt-12 md:ml-6 lg:mt-20 lg:ml-36">
              <p className="w-1/2 font-light text-xl md:text-5xl lg:text-7xl">
                Ayush
              </p>
              <p className="font-semibold text-xl md:text-5xl lg:text-8xl">
                Noorani
              </p>
              <p className="text:xl md: text-xl lg:text-3xl">
                Software Developer
              </p>
            </div>
          </div>
          <div className="w-1/2 h-full pr-2 md:pr-4">
            <div className="w-full h-full flex flex-col justify-end pb-2">
              <div className="flex flex-col justify-end gap-1 mb-1 md:flex-row md:mb-4 md:gap-4">
                <p className="text-xs md:text-lg">ayushnoorani6@gmail.com</p>
                <p className="text-xs md:text-lg">+91 7709786655</p>
              </div>
              <div className="flex flex-row gap-2 justify-end">
                <FacebookIcon
                  size={48}
                  round
                  onClick={() => handleRedirctTo("facebook")}
                  className="cursor-pointer"
                />
                <LinkedinIcon
                  size={48}
                  round
                  onClick={() => handleRedirctTo("linkedIn")}
                  className="cursor-pointer"
                />
                <InstagramIcon
                  size={48}
                  round
                  onClick={() => handleRedirctTo("instagram")}
                  className="cursor-pointer"
                />
                <GithubIcon
                  size={48}
                  round
                  onClick={() => handleRedirctTo("github")}
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      )}
      {name == "About" && (
        <div className="w-full h-auto">
          <div className="w-full flex flex-col justify-center items-center md:flex-row">
            <div className="w-full h-full overflow-hidden md:w-1/3 flex flex-col justify-between pb-2">
              <SoftwareSkills />
              <Languages />
            </div>
            <div className="w-full h-full overflow-hidden md:w-1/3 flex flex-col justify-between pb-2">
              <Experience />
            </div>
            <div className="w-full h-full overflow-hidden md:w-1/3 flex flex-col justify-between pb-2">
              <Projects />
              <Education />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
