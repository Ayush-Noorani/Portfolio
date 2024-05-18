import React from "react";

const Languages = () => {
  const skills = [
    ["English", "90"],
    ["Hindi", "90"],
    ["Konkani", "70"],
    ["Gujarati", "80"],
  ];
  return (
    <div className="w-full flex flex-col text-white items-center pt-5 ">
      <h2 className="text-2xl md:text-4xl font-bold">Languages</h2>
      <div className=" w-1/2 flex flex-col items-center md:mt-5">
        {skills.map((skill, index) => {
          return (
            <div
              className="w-full flex flex-row justify-between items-center md:w-3/4"
              key={index}
            >
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

export default Languages;
