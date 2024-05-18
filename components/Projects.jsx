import React from "react";

const Projects = () => {
  return (
    <div className="w-full flex flex-col text-white  items-center pt-5">
      <h2 className="text-2xl md:text-4xl font-bold">Projects</h2>
      <div className="flex flex-col justify-start items-start gap-2 md:gap-5 md:mt-5">
        <div>
          <h2 className="font-semibold text-lg md:text-3xl">Sprint Board</h2>
          <p className="text-sm md:text-xl">
            Tech Stack: TypeScript, Flask, MongoDB, Redux, ChartJs
          </p>
        </div>
        <div>
          <h2 className="font-semibold text-lg md:text-3xl">Sportify Clone</h2>
          <p className="text-sm md:text-xl">
            Tech Stack: ReactJs, NodeJs, Express, MongoDB
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
