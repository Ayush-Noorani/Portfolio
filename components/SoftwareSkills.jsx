import React from "react";
import "../app/globals.css";

const SoftwareSkills = () => {
  const skills = [
    ["Python", "90"],
    ["JavaScript", "80"],
    ["TypeScript", "80"],
    ["ReactJs", "80"],
    ["NextJs", "70"],
    ["Docker", "70"],
    ["Redux", "70"],
    ["MongoDB", "70"],
    ["MySQL", "80"],
    ["AWS", "50"],
  ];
  return (
    <div className="w-full flex flex-col text-white items-center pt-5 ">
      <h2 className="text-2xl md:text-4xl font-bold">Software Skills</h2>
      <div className=" w-1/2 flex flex-col items-center md:mt-5">
        {skills.map((skill, index) => {
          return (
            <div className="w-full flex flex-row justify-between items-center md:w-3/4">
              <h3 className="text-sm md:text-2xl">{skill[0]}</h3>
              <input
                type="range"
                min="1"
                max="100"
                value={skill[1]}
                class="slider"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SoftwareSkills;
