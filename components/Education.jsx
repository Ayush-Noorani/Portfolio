import React from "react";

const Education = () => {
  return (
    <div className="w-full flex flex-col text-white  items-center pt-5">
      <h2 className="text-2xl md:text-4xl font-bold">Education</h2>
      <div className="flex flex-col justify-start items-start gap-2 md:gap-5 md:mt-5">
        <div>
          <p className="font-semibold text-lg md:text-3xl">
            MSc Information Technology
          </p>
          <div className="flex flex-row justify-between text-sm md:text-xl">
            <span>Goa University</span>
            <span>GPA : 9.78</span>
          </div>
        </div>
        <div>
          <p className="font-semibold text-lg md:text-3xl">
            BSc Computer Science
          </p>
          <div className="flex flex-row justify-between text-sm md:text-xl">
            <span>Goa University</span>
            <span>GPA : 8.63</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
