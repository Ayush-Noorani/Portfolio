import React from "react";

const Experience = () => {
  return (
    <div className="w-full flex flex-col text-white  items-center pt-5">
      <h2 className="text-2xl md:text-4xl font-bold">Experience</h2>
      <div className="w-3/4 md:w-full flex flex-col justify-start items-start gap-2 md:gap-5 md:mt-5">
        <div>
          <p className="font-semibold text-lg md:text-3xl">
            Software Development Consultant
          </p>
          <div className="flex flex-row justify-between text-md md:text-xl">
            <span>Oqton</span>
            <span>June 2023 - Present</span>
          </div>
          <div className="text-sm md:text-md">
            <li>
              Orchestrated the development of Python adapters to seamlessly
              translate data across diverse protocols (OPCUA, MODBUS, MQTT,
              HTTP), enhancing human interaction by standardizing data formats
              for improved readability.
            </li>
            <li>
              Innovated and implemented front-end solutions using React.js and
              TypeScript, resulting in improved user experiences, substantially
              decreased component mount time, and increased component
              reusability.
            </li>
            <li>
              Developed emulators to closely mimic the functionality of real 3D
              printers, facilitating testing and development processes.
            </li>
            <li>
              Deployed and maintained service stacks within Docker environments
              hosted on Linux systems, ensuring seamless operation and
              scalability of software systems.
            </li>
          </div>
        </div>
        <div>
          <p className="font-semibold text-lg md:text-3xl">
            {`Junior Software Engineer (Intern)`}
          </p>
          <div className="flex flex-row justify-between text-md md:text-xl">
            <span>Oqton</span>
            <span>Dec 2023 - May 2023</span>
          </div>
          <div className="text-sm md:text-md">
            <li>
              Worked with React TypeScript and ChartJs to develop a new user
              interface for an existing Telemetry application which helped boost
              component resue and reduce render time significantly.
            </li>
            <li>
              Applied microservice architecture to implement microservices using
              Docker, Web Sockets and Kafka message broker.
            </li>
            <li>
              Integrated Redux within React.js, resulting in remarkably improved
              state management capabilities.
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
